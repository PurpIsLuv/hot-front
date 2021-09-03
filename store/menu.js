export const state = () => ({
  items: [
    {
      icon: 'mdi-apps',
      title: 'Main',
      to: '/'
    },
    {
      icon: 'mdi-view-list',
      title: 'Categories',
      to: '/category'
    },
    {
      icon: 'mdi-star',
      title: 'Pornstars',
      to: '/star'
    },
    {
      icon: 'mdi-text-box-outline',
      title: 'Abuse',
      to: '/abuse'
    },
    {
      icon: 'mdi-handshake-outline',
      title: 'Help',
      to: '/help'
    }
  ],
  adminItems: [
    {
      icon: 'mdi-view-list',
      title: 'Admin-Video',
      to: '/admin/video/list'
    },
    {
      icon: 'mdi-view-list',
      title: 'Admin-Category',
      to: '/admin/category/list'
    },
    {
      icon: 'mdi-view-list',
      title: 'Admin-Star',
      to: '/admin/star/list'
    }
  ]
})