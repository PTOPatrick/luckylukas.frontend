import auth from '../../auth_config.json';

export const environment = {
  production: true,
  auth: {
    ...auth,
    redirectUri: window.location.origin
  }
};
