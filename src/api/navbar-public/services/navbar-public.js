'use strict';

/**
 * navbar-public service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::navbar-public.navbar-public');
