// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { FormControl } from '@mui/material'
import { Grid, Switch } from '@mui/material'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { t } from 'i18next'
import useAPI from 'src/hooks/useNewApi'
import { it } from 'date-fns/locale'
import { Select, MenuItem } from '@mui/material'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const EditPermissionDrawer = ({ data, open, toggle, itemToEdit, refetch }) => {
  console.log(data);
  const api = useAPI()
  const queryClient = useQueryClient()
  const [delay, setDelay] = useState(false)

  const s = t('Success')
  const f = t('Something went wrong')


  const [menuName, setMenuName] = useState('')
  const [menuURL, setMenuURL] = useState('')
  const [apiURL, setApiURL] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (data) {
      setMenuName(data.menuName)
      setMenuURL(data.menuURL)
      setApiURL(data.apiURL)
      setStatus(data.status)
    }
  }, [data])

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const onSubmit = () => {

  }

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
        <Typography variant='h5'>{t('Edit Permission')}</Typography>
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
        <Box sx={{ my: 4 }}>
          <FormControl fullWidth required>
            <CustomTextField
              fullWidth
              label={t('Menu Name')}
              value={menuName}
              onChange={e => setMenuName(e.target.value)}
              placeholder={t('Menu Name')}
            />
          </FormControl>
        </Box>

        <Box sx={{ my: 4 }}>
          <FormControl fullWidth required>
            <CustomTextField
              fullWidth
              label={t('Menu URL')}
              value={menuURL}
              multiline
              onChange={e => setMenuURL(e.target.value)}
              placeholder={t('Menu URL')}
            />
          </FormControl>
        </Box>

        <Box sx={{ my: 4 }}>
          <FormControl fullWidth required>
            <CustomTextField
              fullWidth
              label={t('API URL')}
              value={apiURL}
              multiline
              onChange={e => setApiURL(e.target.value)}
              placeholder={t('API URL')}
            />
          </FormControl>
        </Box>

        <Grid item sm={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CustomTextField
              fullWidth
              select
              value={status}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'role-controlled' }}
              label={t('Status')}
            >
              <MenuItem value="Active">{t('Active')}</MenuItem>
              <MenuItem value="Inactive">{t('InActive')}</MenuItem>
            </CustomTextField>
          </Box>
        </Grid>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type='submit'
            onClick={onSubmit}
            variant='outlined'
            sx={{ mr: 3 }}
          >
            {delay ? t('Loading...') : t('Submit')}
          </Button>
          <Button variant='tonal' color='secondary' onClick={toggle}>
            {t('Cancel')}
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default EditPermissionDrawer
