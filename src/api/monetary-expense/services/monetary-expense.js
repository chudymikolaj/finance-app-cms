'use strict';

/**
 * monetary-expense service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monetary-expense.monetary-expense');
