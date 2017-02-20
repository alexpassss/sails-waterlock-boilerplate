/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

  attributes: require('waterlock').models.user.attributes({
    attempts: {
        collection: 'attempt',
        via: 'user'
    },
    jsonWebTokens: {
        collection: 'jwt',
        via: 'owner'
    },
    auth:{
        model: 'auth'
    }
  }),

  beforeCreate: require('waterlock').models.user.beforeCreate,
  beforeUpdate: require('waterlock').models.user.beforeUpdate
};
