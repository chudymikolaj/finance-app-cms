'use strict';

/**
 * navbar-private service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::navbar-private.navbar-private');
