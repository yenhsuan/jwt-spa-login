const url = function getEndpointServerURL() {
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    return 'http://localhost:8080/';
  }

  if (env === 'production') {
    return 'http://yenhsuan.xyz/';
  }

  throw new Error('No Enpoint URL Defined');
};

export default url;
