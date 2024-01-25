import type { Schema, Attribute } from '@strapi/strapi';

export interface FormForm extends Schema.Component {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Login Form';
    icon: 'layout';
    description: '';
  };
  attributes: {
    loginInput: Attribute.String & Attribute.Required;
    emailInput: Attribute.String & Attribute.Required;
    loginButtonName: Attribute.String;
    forgetpasswordLink: Attribute.String;
    createNewAccountLink: Attribute.String;
    createNewAccountTextBeforeLink: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.form': FormForm;
    }
  }
}
