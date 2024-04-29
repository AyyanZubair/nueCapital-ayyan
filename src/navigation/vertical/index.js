const navigation = () => {
  return [
    {
      icon: 'tabler:smart-home',
      title: 'Dashboard',
      path: '/admin/dashboards',
      role: 'admin'
    },
    {
      icon: 'tabler:building-community',
      title: 'Programs',
      path: '/admin/Programs',
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
