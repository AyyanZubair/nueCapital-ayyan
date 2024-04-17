import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import toast from 'react-hot-toast'
import useAPI from 'src/hooks/useNewApi'
import { baseURL } from 'src/Constants/Constants'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [userPermissions, setUserPermissions] = useState([])
  const [userRoles, setUserRoles] = useState([])
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  const api = useAPI()

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem('accessToken')

      if (storedToken && !user) {
        setLoading(true)
        try {
          // const res = await api.get(`/users/users.getuserdetailsbyidasync`, { params: { id:JSON.parse(localStorage.getItem('user')).id } });

          // const res = await api.get(`/personal/personal.getcurrentuserdetailasync`)
          // setUser({ ...res.data?.data, role: 'admin' })
          setUser(JSON.parse(localstorage.getItem('user')))

        } catch (error) {
          if (error?.response?.status === 401) {
            window.localStorage.removeItem('accessToken')
            window.localStorage.removeItem('refreshToken')
            window.localStorage.removeItem('userData')
            localStorage.removeItem('userInfo')
            router.replace('/login')
          } else {
            setLoading(false)
            router.replace('/login')
          }
        } finally {
          setLoading(false)
        }
      } else {
        setUser(null)
        setLoading(false)
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleLogin = async (params, errorCallback) => {
    const { email, password } = params
    try {
      const res = await axios.get(
        `${baseURL + '/auth/user.getToken'}`,
        { params: {Email:email, Password:password} },
        
      )
       console.log("res", res)

      // localStorage.removeItem('userInfo')
      localStorage.setItem('accessToken', res?.data?.data?.token.token)

      localStorage.setItem('refreshToken', res.data?.data?.token.refreshToken)

      localStorage.setItem('user', JSON.stringify({ ...res?.data?.data?.user, role: 'admin' }))

      setUser({ ...res?.data?.data?.user, role: 'admin' })

      const returnUrl = router.query.returnUrl

      // const redirectURL = returnUrl && returnUrl !== '/dashboards' ? returnUrl : '/dashboards'
      router.replace('/admin/dashboards')
    } catch (error) {
      console.log(error)
      if (error.response?.status === 401) {
        errorCallback()
      } else {
        toast.error('Something went wrong')
      }
    }
  }

  const handleLogout = () => {


    // window.localStorage.clear()

    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('refreshToken')
    window.localStorage.removeItem('userPermissions')
    window.localStorage.removeItem('userRoles')
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('formBuilderTemplates')
    localStorage.removeItem('userInfo')

    setUser(null)

    router.replace('/auth/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    userPermissions,
    userRoles
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }