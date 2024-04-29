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
        <Typography variant='h5'>{t('Add New User')}</Typography>
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

          <input type='file' id='userImageNew' className='hidden' onChange={e => setFile(e.target.files[0])} />

          <Button
            type='submit'
            variant='outlined'
            onClick={() => document.getElementById('userImageNew').click()}
            sx={{ mr: 3 }}
          >
            {t('Upload')}
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <div>
            <p>
              {t('Full Name')}
              <span className='font-bold text-red-500'>*</span>
            </p>
            <Controller
              name='fullName'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  onChange={onChange}
                  placeholder='Jhon Doe'
                  error={Boolean(errors.fullName)}
                  {...(errors.fullName && { helperText: errors.fullName.message })}
                />
              )}
            />
          </div>

          <div>
            <p>
              {t('Username')}
              <span className='font-bold text-red-500'>*</span>
            </p>
            <Controller
              name='username'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  onChange={onChange}
                  placeholder={t('Username')}
                  error={Boolean(errors.username)}
                  {...(errors.username && { helperText: errors.username.message })}
                />
              )}
            />
          </div>
          <div>
            <p>
              {t('Email')}
              <span className='font-bold text-red-500'>*</span>
            </p>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  onChange={onChange}
                  placeholder='example@email.com'
                  error={Boolean(errors.email)}
                  {...(errors.email && { helperText: errors.email.message })}
                />
              )}
            />
          </div>
          <div>
            <p>
              {t('Password')}
              <span className='font-bold text-red-500'>*</span>
            </p>
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <Box sx={{ position: 'relative' }}>
                  <CustomTextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    placeholder={t('Password')}
                    error={Boolean(errors.password)}
                    {...(errors.password && { helperText: errors.password.message })}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label={showPassword ? t('Hide Password') : t('Show Password')}
                          onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                          sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
                        >
                          <Icon icon={showPassword ? 'tabler:eye-off' : 'tabler:eye'} fontSize='1.25rem' />
                        </IconButton>
                      )
                    }}
                  />
                </Box>
              )}
            />
          </div>
          <div>
            <p>
              {t('Confirm Password')}
              <span className='font-bold text-red-500'>*</span>
            </p>
            <Controller
              name='confirmPassword'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <Box sx={{ position: 'relative' }}>
                  <CustomTextField
                    fullWidth
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    placeholder={t('Confirm Password')}
                    error={Boolean(errors.confirmPassword)}
                    {...(errors.confirmPassword && { helperText: errors.confirmPassword.message })}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label={showConfirmPassword ? t('Hide Confirm Password') : t('Show Confirm Password')}
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
                        >
                          <Icon icon={showConfirmPassword ? 'tabler:eye-off' : 'tabler:eye'} fontSize='1.25rem' />
                        </IconButton>
                      )
                    }}
                  />
                </Box>
              )}
            />
          </div>
          <div>
            <p>
              {t('Phone Number')}
              <span className='font-bold text-red-500'>*</span>
            </p>
            <Controller
              name='phoneNumber'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <CustomTextField
                  fullWidth
                  value={value}
                  onChange={onChange}
                  placeholder='+920011232323'
                  error={Boolean(errors.phoneNumber)}
                  {...(errors.phoneNumber && { helperText: errors.phoneNumber.message })}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name='isActive'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <div className='flex items-center pb-5'>
                  <Switch
                    checked={value}
                    label={t('Active')}
                    onChange={onChange}
                    error={errors.isActive}
                    {...(errors.isActive && { helperText: errors.isActive.message })}
                  />
                  <Typography sx={{ ml: 2 }}>{t('Active')}</Typography>
                </div>
              )}
            />
          </div>
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
