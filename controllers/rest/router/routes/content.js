module.exports = globals => [
  {
    description: 'Get all content',
    method: 'get',
    route: '/content',
    cb: globals.services.content.get,
  },
  {
    description: 'Get a piece of content',
    method: 'get',
    route: '/content/:id',
    cb: globals.services.content.get,
  },
  {
    description: 'Create a piece of content',
    method: 'post',
    route: '/content',
    cb: globals.services.content.create,
  },
  {
    description: 'Modify a piece of content',
    method: 'put',
    route: '/content/:id',
    cb: globals.services.content.modify,
  },
];
