'use strict';

module.exports = {
  url: 'https://patricknelson.dev',
  pathPrefix: '/',
  title: 'Blog by Patrick Nelson',
  subtitle: 'Software development, architecture and system design.',
  copyright: '© All rights reserved.',
  disqusShortname: 'patricknelsondev',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-146031377-1',
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
    photo: '/headshot_square.png',
    bio: 'Developer',
    contacts: {
      email: 'pnelson5@pm.me',
      twitter: '@Patrick_Nelson00',
      github: 'pnelson5'
    }
  }
};
