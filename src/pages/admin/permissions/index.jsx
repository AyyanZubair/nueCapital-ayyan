import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import Icon from 'src/@core/components/icon'

import TableHeader from './components/TableHeader'
import AddPermissionDrawer from './components/AddPermissionDrawer'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { CircularProgress } from '@mui/material'
import EditPermissionDrawer from './components/EditPermissionDrawer'
import Tooltip from '@mui/material/Tooltip'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import toast from 'react-hot-toast'
import UserModal from './components/PermissionModal'
import { t } from 'i18next'
import useAPI from 'src/hooks/useNewApi'
import axios from 'axios'
import { baseURL } from 'src/Constants/Constants'

const RowOptions = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)
  const api = useAPI()

  // query

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = id => {
    const confirm = window.confirm(t('Confirm delete user') + ` : ${data?.firstName + ' ' + data.lastName}`)
    if (confirm) {
      mutation.mutate(id)
    } else {
      handleRowOptionsClose()
    }
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='tabler:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          onClick={() => {
            handleRowOptionsClose()
            data.editFn(data)
          }}
          sx={{ '& svg': { mr: 2 } }}
        >
          <Icon icon='tabler:edit' fontSize={20} />
          {t('Edit')}
        </MenuItem>
        <MenuItem onClick={() => handleDelete(data.id)} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='tabler:trash' fontSize={20} />
          {mutation.isPending ? t('Deleting') : t('Delete')}
        </MenuItem>
      </Menu>
    </>
  )
}

const columns = [
  {
    flex: 0.2,
    minWidth: 200,
    field: 'menuName',
    headerName: t('Menu Name'),
    renderCell: ({ row }) => {
      return (
        <Typography>
          {row.menuName}
        </Typography>
      );
    }
  },
  {
    flex: 0.2,
    field: 'menuURL',
    minWidth: 170,
    headerName: t('Menu URL'),
    renderCell: ({row}) => {

      return (
        <Typography>
          {row.menuURL}
        </Typography>
      );
    },
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: t('API URL'),
    field: 'apiURL',
    renderCell: ({ row }) => {
      return (
        <Typography
          noWrap
        >
          {row.apiURL}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 190,
    field: 'status',
    headerName: t('Status'),
    renderCell: ({ row }) => {
      return (
        <Typography noWrap sx={{ color: 'text.secondary' }}>
          {row.status}
        </Typography>
      )
    }
  },

  {
    flex: 0.15,
    minWidth: 100,
    sortable: false,
    field: 'date modified',
    headerName: t('Date Modified'),
    renderCell: ({ row }) => (
      <div className='flex items-center gap-4'>
        {row.dateModified}
      </div>
    )
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: t('Actions'),
    renderCell: ({ row }) => (
      <div className='flex items-center gap-4'>
        <button onClick={() => row.editFn(row)}>
          <Icon icon='tabler:edit' />
        </button>
        <button onClick={() => row.delFn(row.id)}>
          <Icon icon='tabler:trash' />
        </button>
      </div>
    )
  }
]

const PermissionList = () => {
  const api = useAPI()

  const [addUserOpen, setAddUserOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [usersToShow, setUsersToShow] = useState([])
  const [itemToEdit, setItemToEdit] = useState(null)
  const [openEditUser, setOpenEditUser] = useState(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => api.get('/Users/users.getlistofallusersasync')
  // })

  const permissionsData = [
    {
      id: 1,
      menuName: 'Dashboard',
      menuURL: '/admin/dashboard',
      apiURL: '/api/dashboard',
      status: 'Active',
      dateModified: '2023-04-01',
    },
    {
      id: 2,
      menuName: 'User-Managment',
      menuURL: '/admin/user-managment',
      apiURL: '/api/user-managment',
      status: 'Active',
      dateModified: '2023-04-02',
    },
    {
      id: 3,
      menuName: 'Roles',
      menuURL: '/admin/roles',
      apiURL: '/api/roles',
      status: 'Active',
      dateModified: '2023-04-02',
    }

  ];

  useEffect(() => {
    if (permissionsData) {
      setUsersToShow(permissionsData)
    }
  }, [])

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: id => api.post(`/users/user.deleteuserasync`, {}, { params: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries(['users'])
      toast.success('User Deleted')
    },
    onError: errors => {
      console.log(errors)
      handleRowOptionsClose()
      toast.error('Request Failed')
    }
  })
  let isError = false

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            value={searchValue}
            handleFilter={val => setSearchValue(val)}
            toggle={() => setAddUserOpen(p => !p)}
          />

          {isError ? (
            <div className='text-center w-full py-5'>{t('Something went wrong! Please try again.')}</div>
          ) : (
            <DataGrid
              autoHeight
              rowHeight={62}
              rows={
                permissionsData.length > 0
                  ? permissionsData
                    ?.filter(permission => permission.menuName.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(permission => ({
                      ...permission,
                      editFn: data => {
                        setItemToEdit(data)
                        setOpenEditUser(true)
                      },
                      delFn: id => {
                        const confirm = window.confirm('Cofirm delete user?')
                        if (confirm) mutation.mutate(id)
                      }
                    }))
                  : []
              }
              columns={columns}
              loadingOverlayComponent={<CircularProgress />}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
            />

          )}
        </Card>
      </Grid>

      <AddPermissionDrawer open={addUserOpen} toggle={() => setAddUserOpen(p => !p)} />
      <EditPermissionDrawer open={openEditUser} toggle={() => setOpenEditUser(p => !p)} data={itemToEdit} />
    </Grid>
  )
}

export default PermissionList
