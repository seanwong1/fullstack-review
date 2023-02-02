const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = async (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    //params: {owner: username},
    headers: {
      'User-Agent': 'request',
      //'content-type': 'application/x-www-form-urlencoded',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios(options)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports.getReposByUsername = getReposByUsername;