module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544431702861_1532';

  // add your config here
  config.middleware = ['errorHandle'];
  config.errorHandle = {
    debug: true,
  };

  config.validateJoi = {
    options: {
      abortEarly: false,
    },
  };
  
  config.security = {
    csrf: false,
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '6033',
      user: 'root',
      password: 'mRVHePdfa4Z3X0ewfctefpZuqDrSbtINR4VRslgA2s',
      database: 'myself',
    },
    app: true,
    agent: false,
  };

  return config;
};