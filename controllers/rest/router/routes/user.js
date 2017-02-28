module.exports = globals => [
  {
    description: 'Get all content by one user',
    method: 'get',
    route: '/user/:id',
    cb: globals.services.content.getByUser,
  },
];
