// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { t } from 'i18next'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Typography } from '@mui/material'

const TableHeader = props => {
  // ** Props
  const { handleFilter, toggle, value } = props

  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Typography sx={{ fontSize: '1.125rem', fontWeight: '500' }}>{t('Roles List')}</Typography>

      <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <CustomTextField
          value={value}
          sx={{ mr: 4 }}
          placeholder={t('Search Roles')}
          onChange={e => handleFilter(e.target.value)}
        />

        <Button onClick={toggle} variant='outlined' sx={{ '& svg': { mr: 2 } }}>
          <Icon fontSize='1.125rem' icon='tabler:plus' />
          {t('Add New Role')}
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
