/* eslint prefer-promise-reject-errors: 0 */
/* global fetch */
import AuthApi from 'utils/apis/AuthApi';

class RequestApi {
  constructor() {
    this.headers = {
      Accept: 'application/json',
      'Contetnt-Type': 'application/json',
      'Cache-Control': 'no-cache',
    };
    this.token = '';
    this.auth = new AuthApi(this);
  }

  setToken = (token) => {
    this.token = token;
  };

  timeout = time => new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ code: 2, message: 'Network timed out' });
    }, time);
  });

  request = (url, requestInit) => {
    const init = requestInit;
    init.headers = { ...this.headers, ...init.headers };
    return Promise.race([fetch(url, init), this.timeout(15000)])
      .then(res => (res ? res.json() : null))
      .catch((e) => {
        console.log('loi ne', e);
      });
  };

  GET = (url, headers = {}) => {
    const requestInit = {
      method: 'GET',
      ...headers,
    };
    return this.request(url, requestInit);
  };

  POST = (url, body = {}, headers = {}) => {
    const requestInit = {
      method: 'POST',
      body: JSON.stringify(body),
      ...headers,
    };
    console.log(requestInit);
    return this.request(url, requestInit);
  };

  DELETE = (url, headers = {}) => {
    const requestInit = {
      method: 'POST',
      ...headers,
    };
    return this.request(url, requestInit);
  };

  getHeadersConfig = () => ({
    headers: {
      Authorization: `Beaere ${this.token}`,
    },
  });
}

export default new RequestApi();
