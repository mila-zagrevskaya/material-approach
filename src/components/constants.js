import { FORM } from 'utils';

export const sidebarDropRoutes = [
  {
    pathName: `${FORM}validation_states`,
    dropId: 1,
    linkText: 'Validation states'
  },
  {
    pathName: `${FORM}text_fields`,
    dropId: 2,
    linkText: 'Text fields'
  },
  {
    pathName: `${FORM}checkbox`,
    dropId: 6,
    linkText: 'Checkbox'
  },
  {
    pathName: `${FORM}form_wizard`,
    dropId: 3,
    linkText: 'Form Wizard'
  },
  {
    pathName: `${FORM}inverted_form`,
    dropId: 4,
    linkText: 'Inverted form'
  },
  {
    pathName: `${FORM}grid`,
    dropId: 5,
    linkText: 'Grid'
  },
  {
    pathName: `${FORM}select`,
    dropId: 7,
    linkText: 'Select'
  }
];

export const sidebarMainMenu = [
  {
    path: '/email',
    id: 1,
    text: 'Email',
    icon: 'icon-mail-envelope-closed'
  },
  {
    path: '/chat',
    id: 2,
    text: 'Chat',
    icon: 'icon-chat'
  },
  {
    path: '/ecommerce',
    id: 3,
    text: 'Ecommerce',
    icon: 'icon-bag icon-cheveron-down',
    dropMenu: sidebarDropRoutes
  },
  {
    path: '/maps',
    id: 4,
    text: 'Maps',
    icon: 'icon-map icon-cheveron-down',
    dropMenu: sidebarDropRoutes
  },
  {
    path: '/youtube_Search',
    id: 5,
    text: 'Youtube Search',
    icon: 'icon-youtube'
  },
  {
    path: '/calendar',
    id: 6,
    text: 'Calendar',
    icon: 'icon-calendar'
  },
  {
    path: '/notes',
    id: 7,
    text: 'Notes',
    icon: 'icon-notebook-text'
  },
  {
    path: '/todos',
    id: 8,
    text: 'Todos',
    icon: 'icon-list-numbered'
  },
  {
    path: '/contacts',
    id: 9,
    text: 'Сontacts',
    icon: 'icon-users'
  },
  {
    path: '/shuffle',
    id: 10,
    text: 'Shuffle',
    icon: 'icon-shuffle'
  },
  {
    path: '/charts',
    id: 11,
    text: 'Charts',
    icon: 'icon-line-chart icon-cheveron-down',
    dropMenu: sidebarDropRoutes
  },
  {
    path: '/forms',
    id: 12,
    text: 'Forms',
    icon: 'icon-mail-envelope-closed icon-cheveron-up',
    dropMenu: sidebarDropRoutes
  }
];
