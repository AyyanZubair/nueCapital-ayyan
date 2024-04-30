import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { getInitials } from 'src/@core/utils/get-initials'
import { useRouter } from 'next/router'

const renderClient = row => {
  if (row.imageUrl) {
    return <CustomAvatar src={`data:image/png;base64,${row.imageUrl}`} sx={{ mr: 2.5, width: 38, height: 38 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        sx={{ mr: 2.5, width: 38, height: 38, fontWeight: 500, fontSize: theme => theme.typography.body1.fontSize }}
      >
        {getInitials(row.firstName ? row.firstName : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const ViewUserModel = ({ row }) => {
  // ** State
  const router = useRouter()

  const handleClick = () => {
    router.push(`/admin/user-profile?user=${row.id}`)
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {renderClient(row)}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography
            noWrap
            onClick={handleClick}
            sx={{
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' }
            }}
          >
            {row.fullName}
          </Typography>
          <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
            {row.email}
          </Typography>
        </Box>
      </Box>{' '}
    </>
  )
}

export default ViewUserModel
