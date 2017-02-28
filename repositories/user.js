const _ = require('lodash');
const request = require('request-promise');


module.exports = (globals) => ({
  get: meta => data => {
    console.log(`${globals.config.externalAPIs.userProfiles}/${meta}`);
    return (typeof meta === 'object'
    ? request(`${globals.config.externalAPIs.userProfiles}/`)
    : request(`${globals.config.externalAPIs.userProfiles}/${meta}`))
    .then(JSON.parse)
    .catch(e => {
      console.error(e);
      return {
        author: null,
        picture: null,
      };
    });
  },
});
