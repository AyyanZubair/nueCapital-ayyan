import React, { createRef, useEffect, useState } from 'react'
import { Button, Grid, CircularProgress } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import CustomTextField from 'src/@core/components/mui/text-field'
import toast from 'react-hot-toast'
import { baseURL } from 'src/Constants/Constants'
import { useQuery } from '@tanstack/react-query'
import api from 'src/hooks/useApi'

const FormBuilder = () => {

  const questionData = JSON.parse(localStorage.getItem('rowData'))
  const editTrue = JSON.parse(localStorage.getItem('isEdit')) ?? false
  const fb = createRef()
  const [formData, setFormData] = useState('')
  const [formBuilder, setFormBuilder] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState(questionData?.name || '')
  const [questionid, setQuestionId] = useState(questionData?.id || '')

  const { t } = useTranslation()
  const router = useRouter()

  // templates

  const [templates , setTemplates] = useState(JSON.parse(localStorage.getItem('formBuilderTemplates')));


  const getTemplates = useQuery({
    queryKey:['formBuilderTemplates'],
    queryFn:() => api.get('/mobile/mobile.formbuilder.getalltemplatesasync'),
    enabled:templates?.length < 1 || !templates
  })

  useEffect(()=>{
    if(!templates || !templates.length){
      if(getTemplates.data){
        setTemplates(getTemplates?.data?.data?.data)
        localStorage.setItem('formBuilderTemplates' , JSON.stringify(getTemplates?.data?.data?.data))
      }
    }
  },[getTemplates.data , templates])




  // templates

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.jQuery = require('jquery')
      window.$ = window.jQuery

      require('jquery-ui-sortable')
      require('formBuilder')
    }
  }, [])


  useEffect(() => {

    let fields = templates?.map(temp => temp.template[0]);

    if(fields?.length){

      if (editTrue && questionData) {
        setName(questionData.name)
        setQuestionId(questionData.id)
        if (!formBuilder || !formBuilder.formData) {
          const initialFormData = questionData.content || []
          setFormData(initialFormData)
          setFormBuilder(
            $(fb.current).formBuilder({
              disabledActionButtons: ['data', 'clear', 'save'],
              formData: initialFormData,
              fields
            })
          )
        }
      } else {
        if (!formBuilder || !formBuilder.formData) {
          setFormBuilder(
            $(fb.current).formBuilder({
              disabledActionButtons: ['data', 'clear', 'save'],
              formData: [],
              fields,

            })
          )
        }
      }

    }






  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templates])

  async function saveData() {
    setFormData(formBuilder.formData)
    editTrue ? handleUpdateQuestionnaires() : handleAddQuestionnaires()
  }

  const s = t('Success')
  const f = t('Something went wrong')
  const n = t('Name field must not be empty')


  function clearData() {
    formBuilder.actions.clearFields()
    setFormData([])
    setName('')
    setQuestionId('')
  }

  const handleAddQuestionnaires = async () => {
    if(!name) return toast.error(n)
    setIsLoading(true)
    const userToken = localStorage.getItem('accessToken')

    const bodyParams = {
      name: name,
      content: formBuilder.formData
    }

    try {
      const response = await fetch(`${baseURL}/questionnaire/questionnaire.createquestionnaireasync`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyParams)
      })
      const responseData = await response.json()
      if (response.ok) {
        toast.success(s)
        localStorage.removeItem('rowData')
        router.push('/assets-management/questioneries')
      } else {
        toast.error(responseData?.messages)
      }
    } catch (error) {
      toast.error(f)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdateQuestionnaires = async () => {


    if(!name) return toast.error(n)
    setIsLoading(true)
    const userToken = localStorage.getItem('accessToken')


    const bodyParams = {
      id: questionid,
      name: name,
      content: formBuilder.formData,
      isActive: false
    }

    try {
      const response = await fetch(`${baseURL}/questionnaire/questionnaire.updatequestionnaireasync`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyParams)
      })
      const responseData = await response.json()
      if (response.ok) {
        toast.success(s)
        localStorage.removeItem('rowData')
        router.push('/assets-management/questioneries')
      } else {
        toast.error(f)

      }
    } catch (error) {
      console.log(error)
      toast.error(f)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Grid item container spacing={4}>
        <Grid item md={9} xs={12}>
          <CustomTextField
            value={name}
            fullWidth
            sx={{ mb: 4 }}
            placeholder='John Doe'
            onChange={e => setName(e.target.value)}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          {isLoading ? (
            <CircularProgress style={{ display: 'flex', justifyContent: 'center', flex: 1 }} />
          ) : (
            <>
              <Button variant='outlined' sx={{ ml: 2 }} onClick={saveData}>
                {editTrue ? t('Edit') : t('Save')}
              </Button>
              <Button variant='outlined' sx={{ ml: 2 }} onClick={clearData}>
                {t('Clear')}
              </Button>
            </>
          )}
        </Grid>
      </Grid>
      <Grid item sm={12} xs={12}>
        <div
          style={{
            marginLeft: '5px',
            marginRight: '5px',
            marginTop: '30px',
            overflow: 'auto',
            height: '500px'
          }}
        >
          <div id='fb-editor' ref={fb} style={{ height: '500px' }} />
        </div>
      </Grid>
    </>
  )
}

export default FormBuilder
