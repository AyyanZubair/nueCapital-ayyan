import { BiSolidGridAlt } from 'react-icons/bi'

const navigation = () => {
  return [
    {
      icon: 'tabler:smart-home',
      title: 'Home',
      path: '/admin/dashboards',
      role: 'admin'
    },
    {
      icon: 'tabler:wallet',
      title: 'Wallet',
      path: '/admin/wallet',
      role: 'admin'
    },
    {
      icon: 'tabler:briefcase',
      title: 'Portfolio',
      path: '/admin/portfolio',
      role: 'admin'
    },
    {
      icon: 'tabler:user',
      title: 'Profile',
      path: '/admin/profile',
      role: 'admin'
    },
    {
      icon: 'tabler:user',
      title: 'User Management',
      path: '/admin/user-management',
      role: 'admin'
    },
    {
      icon: 'tabler:user',
      title: 'Roles Management',
      path: '/admin/roles',
      role: 'admin'
    }
  ]
}

export default navigation
