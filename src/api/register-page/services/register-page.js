'use strict';

/**
 * register-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-page.register-page');
