import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Icon from 'src/@core/components/icon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAPI from 'src/hooks/useNewApi';
import CircularProgress from '@mui/material/CircularProgress';

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}));

const ViewUserModel = ({ row }) => {
  const api = useAPI();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['deletePermission'], 
    mutationFn: id => api.post(`/permissions/delete`, {}, { params: { id } }),
    onMutate: () => {
      setIsLoading(true)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['permissions']);
      toast.success('Permission Deleted');
      handleClose();
      setIsLoading(false)
    },
    onError: errors => {
      toast.error('Request Failed');
      console.log(errors);
      setIsLoading(false)
    }
  });

  function handleDelete() {
    mutation.mutate(row.id);
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          noWrap
          onClick={handleClickOpen}
          sx={{
            fontWeight: 500,
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'text.secondary',
            '&:hover': { color: 'primary.main' }
          }}
        >
          {row.menuName}
        </Typography>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        className='cursor-pointer'
        sx={{
          '& .MuiDialog-paper': {
            overflow: 'visible'
          }
        }}
      >
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          <Typography variant='h6' component='span'>
            {t(`Details of`) + ' ' + `${row.menuName}`}
          </Typography>
          <CustomCloseButton aria-label='close' onClick={handleClose}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
        </DialogTitle>
        <DialogContent>
          <Typography style={{ textAlign: 'center' }}>
            {t('Are you sure you want to delete this permission')}
            <br></br>{' '}
            <span style={{ fontWeight: 'bold' }}>
              {row.menuName}
            </span>
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t('Menu URL')}: {row.menuURL}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t('API URL')}: {row.apiURL}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t('Status')}: {row.isActive ? t('Active') : t('Inactive')}
          </Typography>
        </DialogContent>

        <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Button variant='outlined' onClick={handleDelete}>
                {t('Yes')}
              </Button>
              <Button variant='outlined' onClick={handleClose}>
                {t('No')}
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewUserModel;