const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = email.slice(email.indexOf('@') + 1, email.length);

  while (domain.includes('@')) domain = domain.slice(domain.indexOf('@') + 1, domain.length);

  return domain;
}

module.exports = {
  getEmailDomain
};
