import type { Schema, Attribute } from '@strapi/strapi';

export interface FormForm extends Schema.Component {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Login Form';
    icon: 'layout';
    description: '';
  };
  attributes: {
    emailInput: Attribute.String & Attribute.Required;
    passwordInput: Attribute.String & Attribute.Required;
    loginButtonName: Attribute.String & Attribute.Required;
    forgetpasswordLink: Attribute.String & Attribute.Required;
    createNewAccountNameLink: Attribute.String & Attribute.Required;
    createNewAccountTextBeforeLink: Attribute.String & Attribute.Required;
    addLinkToRegister: Attribute.String & Attribute.Required;
    addLinkToForgotPassword: Attribute.String & Attribute.Required;
    errorMessage: Attribute.String & Attribute.Required;
  };
}

export interface FormRegisterForum extends Schema.Component {
  collectionName: 'components_form_register_forums';
  info: {
    displayName: 'Register Forum';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    usernameInput: Attribute.String & Attribute.Required;
    emailInput: Attribute.String & Attribute.Required;
    passwordInput: Attribute.String & Attribute.Required;
    registerButtonName: Attribute.String & Attribute.Required;
    loginAccountLink: Attribute.String & Attribute.Required;
    loginAccountBeforeLink: Attribute.String & Attribute.Required;
    errorMessage: Attribute.String & Attribute.Required;
    loginAccountNameLink: Attribute.String & Attribute.Required;
    errorMessage400: Attribute.String & Attribute.Required;
    errorMessagePassword: Attribute.String & Attribute.Required;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.form': FormForm;
      'form.register-forum': FormRegisterForum;
      'link.link': LinkLink;
    }
  }
}
