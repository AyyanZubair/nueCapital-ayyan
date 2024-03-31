// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

const AuthGuard = props => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()
  useEffect(
    () => {
      if (!router.isReady) {
        return
      }
      if (router.pathname === '/' && !auth.user && !auth.loading) {
        console.log('here')
        router.push('/portfolio/home')
      } else if (
        auth.user === null &&
        !auth.loading &&
        !window.localStorage.getItem('user') &&
        !router.pathname.includes('portfolio')
      ) {
        if (router.asPath !== '/') {
          console.log('here 2')
          router.replace({
            pathname: '/login',
            query: { returnUrl: router.asPath }
          })
        } else {
          console.log('here 3')
          router.replace('/login')
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route, auth.loading]
  )
  if (auth.loading || auth.user === null) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
