import Editor from 'components/TextFields';

export const ROUTER = [
  {
    path: '/email',
    id: 1,
    exact: true
  },
  {
    path: '/chat',
    id: 2,
    exact: true
  },
  {
    path: '/ecommerce',
    id: 3,
    exact: true
  },
  {
    path: '/maps',
    id: 4,
    exact: true
  },
  {
    path: '/youtube_Search',
    id: 5,
    exact: true
  },
  {
    path: '/calendar',
    id: 6,
    exact: true
  },
  {
    path: '/notes',
    id: 7,
    exact: true
  },
  {
    path: '/todos',
    id: 8,
    exact: true
  },
  {
    path: '/contacts',
    id: 9,
    exact: true
  },
  {
    path: '/shuffle',
    id: 10,
    text: 'Shuffle',
    exact: true
  },
  {
    path: '/charts',
    id: 11,
    exact: true
  },
  {
    path: '/forms',
    id: 12,
    exact: true
  }
];

export const FORM = '/forms/';

export const DROP_ROUTE = [
  {
    pathName: 'validation_states',
    dropId: 1,
    exact: true
  },
  {
    pathName: 'text_fields',
    dropId: 2,
    exact: true,
    component: { Editor }
  },
  {
    pathName: 'progress',
    dropId: 3,
    exact: true
  },
  {
    pathName: 'button',
    dropId: 4,
    exact: true
  },
  {
    pathName: 'grid',
    dropId: 5,
    exact: true
  },
  {
    pathName: 'checkbox',
    dropId: 6,
    exact: true
  },
  {
    pathName: 'select',
    dropId: 7,
    exact: true
  }
];
