import { API_AUTH_ROOT, API_CONTENT_ROOT } from 'constants/appConfig';

export default class AuthApi {
  constructor(baseApi) {
    this.baseApi = baseApi;
  }

  getHeadersConfig = () => this.baseApi.getHeadersConfig();

  POST = (url, body, header) => this.baseApi.POST(url, body, header);

  GET = (url, body, header) => this.baseApi.GET(url, body, header);

  DELETE = (url, header) => this.baseApi.DELETE(url, header);

  login = payload => this.POST(`${API_AUTH_ROOT}/api/authenticate`, payload);

  loginFb = (payload) => {
    const { accessToken } = payload;
    return this.GET(`${API_AUTH_ROOT}/login/facebook_token?access_token=${accessToken}`);
  };

  register = payload => this.POST(`${API_CONTENT_ROOT}/users/sign_up`, payload);

  logout = () => this.GET(`${API_AUTH_ROOT}/api/logout`, this.getHeadersConfig());

  forgotPassword = payload => this.POST(`${API_CONTENT_ROOT}/users/change_pw`, payload);

  changePassword = payload => this.POST(`${API_CONTENT_ROOT}/users/change_pw`, payload);

  activeUser = (payload) => {
    const { username, otp } = payload;
    console.log(payload);
    console.log(`${API_CONTENT_ROOT}/user/active?username=${username}&otp=${otp}`);
    return this.GET(`${API_CONTENT_ROOT}/users/active?username=${username}&otp=${otp}`);
  };
}
