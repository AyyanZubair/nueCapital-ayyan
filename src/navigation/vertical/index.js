import { BiSolidGridAlt } from "react-icons/bi";

const navigation = () => {
  return [
  
    {
      icon: 'tabler:smart-home',
      title: 'Home',
      path: '/admin/dashboards',
      role: 'admin'
    },
    {
      icon: 'tabler:smart-home',
      title: 'Wallet',
      path: '/admin/wallet',
      role: 'admin'
    },
    {
      icon: 'tabler:smart-home',
      title: 'Portfolio',
      path: '/admin/portfolio',
      role: 'admin'
    },
    {
      icon: 'tabler:smart-home',
      title: 'Profile',
      path: '/admin/profile',
      role: 'admin'
    },
  ]
}

export default navigation
