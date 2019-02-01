import axios from 'axios';
import serverURL from './url';

const callApi = function ajaxApiCall(endpoint, method, config) {
  return axios({
    method,
    url: `${serverURL}endpoint`,
    ...config,
  });
};

export default callApi;
