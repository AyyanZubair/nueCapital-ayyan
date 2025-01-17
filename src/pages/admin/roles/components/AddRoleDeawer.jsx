// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { t } from 'i18next'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import useAPI from 'src/hooks/useNewApi'

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return t(`field is required`)
  } else if (valueLen > 0 && valueLen < min) {
    return t(`${field} must be at least ${min} characters`)
  } else {
    return ''
  }
}

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const schema = yup.object().shape({
  roleName: yup
    .string()
    .min(3, obj => showErrors('Role Name', obj.value.length, obj.min))
    .required(),
  roleDescription: yup
    .string()
    .min(3, obj => showErrors('Role Description', obj.value.length, obj.min))
    .required()
})

const defaultValues = {
  roleName: '',
  roleDescription: ''
}

const AddRoleDrawer = ({ open, toggle }) => {
  const api = useAPI()
  const queryClient = useQueryClient()

  const s = t('Role added')
  const f = t('Something went wrong')

  const mutation = useMutation({
    mutationKey: ['addNewRole'],
    mutationFn: data => api.post('/roles/roles.createroleasync', data),
    onSuccess: data => {
      queryClient.invalidateQueries(['roles'])
      reset()
      toggle()
      toast.success(s)
    },
    onError: errors => {
      // toggle()

      toast.error(errors.response.data.messages[0] || f)
    },
    retry: 0
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    mutation.mutate({ name: data.roleName, description: data.roleDescription })
  }

  const handleClose = () => {
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: false }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h5'>{t('Add Role')}</Typography>
        <IconButton
          size='small'
          onClick={handleClose}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='roleName'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={(
                  <Box>
                    {t('Role')} <span className='text-red-500 font-bold'>*</span>
                  </Box>
                )} 
                onChange={onChange}
                placeholder='admin'
                error={Boolean(errors.roleName)}
                {...(errors.roleName && { helperText: errors.roleName.message })}
              />
            )}
          />
          <Controller
            name='roleDescription'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={(
                  <Box>
                    {t('Role Description')} <span className='text-red-500 font-bold'>*</span>
                  </Box>
                )} 
                onChange={onChange}
                placeholder={t('description')}
                error={Boolean(errors.roleDescription)}
                {...(errors.roleDescription && { helperText: errors.roleDescription.message })}
              />
            )}
          />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='outlined' sx={{ mr: 3 }}>
              {mutation.isPending ? t('Loading...') : t('Submit')}
            </Button>
            <Button variant='tonal' color='secondary' onClick={handleClose}>
              {t('Cancel')}
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default AddRoleDrawer
