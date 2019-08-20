'use strict';

module.exports = {
  url: 'https://patricknelson.dev',
  pathPrefix: '/',
  title: 'Blog by Patrick Nelson',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: '© All rights reserved.',
  disqusShortname: 'patricknelsondev',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Patrick Nelson',
    photo: '/photo.jpg',
    bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    contacts: {
      email: 'pnelson5@pm.me',
      twitter: '@Patrick_Nelson00',
      github: 'pnelson5'
    }
  }
};
