import React, { useEffect } from 'react'
import { useState } from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import MainGroup from './components/MainGroup'
import { useQuery } from '@tanstack/react-query'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'
import AddGroup from './components/AddGroup'

import { CircularProgress } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useAPI from 'src/hooks/useNewApi'

export default function Groups() {
  const { t } = useTranslation()
  const [allGroups, setAllGroups] = useState([])
  const [expanded, setExpanded] = useState(null)

  const api = useAPI()

  // add

  const [addOpen, setAddOpen] = useState(false)
  const toggle = () => setAddOpen(p => !p)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['groups'],
    queryFn: () => api.get('/group/group.getallgroupasync')
  })

  useEffect(() => {
    if (data) {
      setAllGroups(data.data.data.data)
    } else {
      setAllGroups([])
    }
  }, [data])

  const language = localStorage.getItem('language')

  return (
    <div>
      <div className='flex items-center justify-end w-full'>
        <Button variant={language === 'en' ? 'contained' : 'outlined'} color='primary' onClick={() => toggle()}>
          <Icon fontSize='1.125rem' icon='tabler:plus' />
          {t('Add new Group')}
        </Button>
      </div>
      {isLoading ? (
        <div className='flex justify-center items-center py-5'>
          <CircularProgress />
        </div>
      ) : isError ? (
        <div className='w-full text-center'>{t('Something went wrong')}</div>
      ) : (
        allGroups.map((g, i) => (
          <MainGroup data={g} key={g.id} expanded={expanded} setExpanded={setExpanded} index={i} />
        ))
      )}
      <AddGroup open={addOpen} toggle={toggle} />
    </div>
  )
}
