// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import UserViewLeft from './view/UserViewLeft'
import UserViewRight from './view/UserViewRight'

const UserView = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5} lg={4}>
        <UserViewLeft />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <UserViewRight />
      </Grid>
    </Grid>
  )
}

export default UserView
