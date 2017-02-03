'use strict';


module.exports = globals => model => ({
  get: ({body, params, query}) =>
    params.id
    ? mockDb[model][params.id] || {}
    : mockDb[model],

  create: ({body, params, query}) =>
    mockDb[model].push(body),

  modify: ({body, params, query}) =>
    Object.assign(mockDb[model][params.id], body),
});

const mockDb = {
  content: [
    {
     title: 'Test Content'
    }
  ],
  user: [
    {
      name: 'Joe Random'
    }
  ]
};