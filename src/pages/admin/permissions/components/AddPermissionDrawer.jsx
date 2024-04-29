// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CustomAvatar from 'src/@core/components/mui/avatar'

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
import { Switch } from '@mui/material'
import { useEffect, useState } from 'react'
import { uploadImage } from 'src/utils/utils'
import { t } from 'i18next'
import useAPI from 'src/hooks/useNewApi'

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return t(`${field} field is required`)
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
  fullName: yup
    .string()
    .min(3, obj => showErrors('First Name', obj.value.length, obj.min))
    .required(),
  email: yup.string().email().required(t('email is a required field')),
  password: yup.string().min(6, t('Password must be at least 6 characters')).required(t('Password is required')),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], t('Passwords must match'))
    .required(t('Confirm password is required')),
  phoneNumber: yup
    .string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, t('Phone number is not valid'))
    .required(t('Phone number is required')),
  isActive: yup.boolean().required(),
  imageUrl: yup.string(),
  username: yup.string().min(3, t('Username is required')).required()
})

const defaultValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  isActive: true,
  imageUrl: '',
  username: ''
}

const AddRoleDrawer = ({ open, toggle }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const api = useAPI()
  const queryClient = useQueryClient()
  const [file, setFile] = useState('')
  const [localImageUrl, setLoacalImageUrl] = useState('')

  const successText = t('User Created')
  const failText = t('Something went wrong')

  const mutation = useMutation({
    mutationKey: ['add-new-user'],
    mutationFn: async data => {
      if (file) {
        const base64 = await uploadImage(file)
        data.imageUrl = base64
      }
      await api.post('/accounts/user.account.createUser', data)
    },
    onSuccess: data => {
      console.log(data)
      queryClient.invalidateQueries(['users'])
      reset()
      toggle()
      toast.success(successText)
    },
    onError: errors => {
      console.log(errors)
      setFile('')

      // toggle()
      toast.error(errors.response.data.messages[0] || failText)
    },
    retry: 0
  })

  useEffect(() => {
    if (file) {
      setLoacalImageUrl(URL.createObjectURL(file))
    } else {
      setLoacalImageUrl('')
    }
  }, [file])

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
    console.log(data)
    mutation.mutate(data)
  }

  const handleClose = () => {
    setFile('')
    setLoacalImageUrl('')
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
        <Typography variant='h5'>{t('Add New Permission')}</Typography>
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
            name='fullName'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={(
                  <Box>
                    {t('Menu Name')} <span className='text-red-500 font-bold'>*</span>
                  </Box>
                )} 
                onChange={onChange}
                placeholder='Menu Name'
                error={Boolean(errors.fullName)}
                {...(errors.fullName && { helperText: errors.fullName.message })}
              />
            )}
          />
          <Controller
            name='menuURL'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={(
                  <Box>
                    {t('Menu URL')} <span className='text-red-500 font-bold'>*</span>
                  </Box>
                )} 
                onChange={onChange}
                placeholder={t('Menu URL')}
                error={Boolean(errors.username)}
                {...(errors.username && { helperText: errors.username.message })}
              />
            )}
          />
          <Controller
            name='apiURL'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label={(
                  <Box>
                    {t('API URL')} <span className='text-red-500 font-bold'>*</span>
                  </Box>
                )} 
                onChange={onChange}
                placeholder='API URL'
                error={Boolean(errors.email)}
                {...(errors.email && { helperText: errors.email.message })}
              />
            )}
          />
          <Controller
            name='status'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Box sx={{ position: 'relative' }}>
                <CustomTextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  value={value}
                  sx={{ mb: 4 }}
                  label={t('Status')}
                  onChange={onChange}
                  placeholder={t('')}
                  error={Boolean(errors.password)}
                  {...(errors.password && { helperText: errors.password.message })}
                />
                
              </Box>
            )}
          />
          <Controller
            name='moduleName'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <Box sx={{ position: 'relative' }}>
                <CustomTextField
                  fullWidth
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={value}
                  sx={{ mb: 4 }}
                  label={(
                    <Box>
                      {t('Module Name')} <span className='text-red-500 font-bold'>*</span>
                    </Box>
                  )} 
                  onChange={onChange}
                  placeholder={t('')}
                  error={Boolean(errors.confirmPassword)}
                  {...(errors.confirmPassword && { helperText: errors.confirmPassword.message })}
                />
              </Box>
            )}
          />        
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='outlined' sx={{ mr: 3 }}>
              {mutation.isPending ? t('Loading...') : t('Save')}
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
