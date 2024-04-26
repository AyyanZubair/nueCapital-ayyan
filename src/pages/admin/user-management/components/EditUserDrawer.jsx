// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { FormControl } from '@mui/material'
import { Grid, Switch } from '@mui/material'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { checkValidation, uploadImage } from '../../../../utils/utils'
import { t } from 'i18next'
import useAPI from 'src/hooks/useNewApi'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const dataTemplate = {
  fullName: '',
  imageUrl: '',
  email: '',
  phoneNumber: '',
  isActive: '',
  userRoles: []
}

// ! start

const AddRoleDrawer = ({ open, toggle, data }) => {
  const api = useAPI()
  const [errorMsg, setErrorMsg] = useState('')
  const [userData, setUserData] = useState(dataTemplate)
  const queryClient = useQueryClient()
  const [delay, setDelay] = useState(false)

  // ! image handling

  const [file, setFile] = useState('')
  const [localImageUrl, setLoacalImageUrl] = useState('')

  // todo her
  const [role, setrole] = useState([])

  const handleselectRole = value => {
    const updatedRoles = value?.map(role => {
      if (role?.enabled === false) {
        role.enabled = true
      }

      return role
    })

    setrole(updatedRoles)
  }

  const handleDelete = deletedRole => event => {
    event.preventDefault()
    const updatedRoles = role?.filter(r => r.roleId !== deletedRole.roleId)
    setrole(updatedRoles)
  }

  // todo  her

  // const { data: rolesList } = useQuery({
  //   queryKey: ['roles'],
  //   queryFn: () => api.get('/roles/roles.getlistofrolesasync')
  // })
  let rolesList = []

  const successText = t('Updated')
  const failText = t('User Update Failed')

  const mutation = useMutation({
    mutationKey: ['updateUser'],
    mutationFn: async uploadData => {
      setDelay(true)
      if (file) {
        const base64 = await uploadImage(file)
        uploadData.imageUrl = base64
      }

      if (!data?.roles?.some(role => role.roleName.toLowerCase() === 'admin')) {
        await api.post(
          '/users/users.toggleuserstatusasync',
          {
            activateUser: uploadData.userRoles.some(role => role.enabled && role.roleName.toLowerCase() === 'admin')
              ? true
              : uploadData.isActive,
            userId: uploadData.id
          },
          { params: { id: uploadData.id } }
        )
      } else {
        uploadData.isActive = true
      }

      await api.post('/users/user.updateuserasync', uploadData, { params: { id: uploadData.id } })
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries(['users', 'user'])
        toast.success(successText)
        setFile('')
        setDelay(false)
        toggle()
      }, 1200)
    },
    onError: errors => {
      setDelay(false)
      toast.error(failText)
      toggle()
      console.log(errors)
    }
  })

  useEffect(() => {
    if (file) {
      setLoacalImageUrl(URL.createObjectURL(file))
    } else {
      setLoacalImageUrl(`data:image/png;base64,${data?.imageUrl}`)
    }
  }, [file, data])

  // ! set initial data

  useEffect(() => {
    if (data) {
      setUserData({
        id: data.id,
        fullName: data.fullName || '',
        imageUrl: data.imageUrl || '',
        email: data.email || '',
        phoneNumber: data.phoneNumber || '',
        isActive: data.isActive || '',
        userRoles: data.roles || ''
      })
      setrole(data.roles)
      setLoacalImageUrl(`data:image/png;base64,${data.imageUrl}`)
    }
  }, [data])

  const onSubmit = () => {
    const postData = {
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      imageUrl: userData.imageUrl,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      isActive: userData.isActive,
      userRoles: []
    }

    const duplicateList = rolesList?.data?.data?.map(({ permissions, ...rest }) => ({
      ...rest,
      enabled: false
    }))

    const updatedDuplicateList = duplicateList?.map(item => {
      const isMatchingId = role?.some(roleItem => roleItem.roleId === item.id)

      if (isMatchingId) {
        return {
          ...item,
          enabled: true
        }
      }

      return item
    })

    updatedDuplicateList?.forEach(singleRole => {
      postData.userRoles.push({
        roleId: singleRole.id,
        roleName: singleRole.name,
        description: singleRole.description,
        enabled: singleRole.enabled,
        isActive: singleRole.isActive
      })
    })

    mutation.mutate(postData)
  }

  //! validation errors
  useEffect(() => {
    const errorMsg = checkValidation(userData, role)
    setErrorMsg(errorMsg)
  }, [userData, role])

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={toggle}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h5'>{t('Edit User')}</Typography>
        <IconButton
          size='small'
          onClick={() => toggle()}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </Header>

      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <div className=' flex items-center justify-start gap-2 flex-col py-6'>
          {localImageUrl ? (
            <CustomAvatar src={localImageUrl} sx={{ mr: 2.5, width: 80, height: 80 }} />
          ) : (
            <CustomAvatar
              skin='light'
              sx={{
                mr: 2.5,
                width: 80,
                height: 80,
                fontWeight: 500,
                fontSize: theme => theme.typography.body1.fontSize
              }}
            ></CustomAvatar>
          )}

          <input type='file' id='userImageEdit' className='hidden' onChange={e => setFile(e.target.files[0])} />

          <Button
            type='submit'
            variant='outlined'
            onClick={() => document.getElementById('userImageEdit').click()}
            sx={{ mr: 3 }}
          >
            {t('Upload')}
          </Button>
        </div>
      </Box>

      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <Box sx={{ my: 4 }}>
          <FormControl fullWidth>
            <CustomTextField
              fullWidth
              label={t('Full Name')}
              value={userData.fullName}
              onChange={e => setUserData(p => ({ ...p, fullName: e.target.value }))}
              placeholder='Jhon Doe'
            />
          </FormControl>
        </Box>

        <Box sx={{ my: 4 }}>
          <FormControl fullWidth>
            <CustomTextField
              fullWidth
              label={t('Email')}
              value={userData.email}
              onChange={e => setUserData(p => ({ ...p, email: e.target.value }))}
              placeholder='jhondoe@gmail.com'
            />
          </FormControl>
        </Box>

        <Box sx={{ my: 4 }}>
          <FormControl fullWidth>
            <CustomTextField
              fullWidth
              label={t('Phone Number')}
              value={userData.phoneNumber}
              onChange={e => setUserData(p => ({ ...p, phoneNumber: e.target.value }))}
              placeholder={t('Phone Number')}
            />
          </FormControl>
        </Box>

        <FormControl sx={{ m: 1, width: '100%' }}>
          <InputLabel id='demo-multiple-chip-label'>{t('Role')}</InputLabel>
          <Select
            labelId='demo-multiple-chip-label'
            id='demo-multiple-chip'
            multiple
            value={role}
            onChange={e => handleselectRole(e.target.value)}
            input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
            renderValue={selected => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected?.map(
                  value =>
                    value.enabled && (
                      <Chip
                        key={value.roleId}
                        label={t(value.roleName)}
                        onMouseDown={event => {
                          event.stopPropagation()
                        }}
                        onDelete={event => handleDelete(value)(event)}
                      />
                    )
                )}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {rolesList?.data?.data?.map(item =>
              item.isActive ? (
                <MenuItem
                  key={item.id}
                  value={{
                    roleId: item.id,
                    roleName: item.name,
                    description: item.description,
                    enabled: false
                  }}
                  disabled={role.some(role => role.roleId === item.id && role.enabled === true)}
                >
                  {t(item.name)}
                </MenuItem>
              ) : null
            )}
          </Select>
        </FormControl>

        {!data?.roles?.some(role => role.roleName.toLowerCase() === 'admin') &&
          !role.some(role => role.roleName.toLowerCase() === 'admin') && (
            <Grid item sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Switch
                  checked={userData.isActive || false}
                  onChange={() => setUserData(p => ({ ...p, isActive: !p.isActive }))}
                  inputProps={{ 'aria-label': 'role-controlled' }}
                  sx={{
                    '--Switch-thumbSize': '27px',
                    '--Switch-trackWidth': '100px',
                    '--Switch-trackHeight': '45px'
                  }}
                />
                <Typography sx={{ ml: 2 }}>{t('Active')}</Typography>
              </Box>
            </Grid>
          )}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type='submit'
            onClick={onSubmit}
            variant='outlined'
            sx={{ mr: 3 }}
            disabled={Boolean(errorMsg) || mutation.isPending || delay}
          >
            {mutation.isPending || delay ? t('Loading...') : t('Submit')}
          </Button>
          <Button variant='tonal' color='secondary' onClick={toggle}>
            {t('Cancel')}
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default AddRoleDrawer
