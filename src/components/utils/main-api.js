const mainApiOptions = {
  // baseUrl: "https://legadrop.org",
  baseUrl: "http://192.168.1.8:8000",

  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
};

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponseStatus(response) {
    return response.ok
      ? response.json()
      : response.json().then((err) => Promise.reject(err.message));
  }
  async _sendRequest({
    endpoint,
    method = "GET",
    body,
    requiresToken = false,
  }) {
    const headers = { ...this._headers };

    if (requiresToken) {
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    const res = await fetch(`${this._baseUrl}${endpoint}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return this._checkResponseStatus(res);
  }

  // Login
  async loginAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/sign-in`,
      method: "POST",
      body: userData,
    });
  }
  // Get employees list
  async getEmployeesAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/employees`,
      method: "GET",
      body: userData,
    });
  }

  // Create employee
  async createEmployeeAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/employee`,
      method: "POST",
      body: userData,
    });
  }
  // set role
  async setRoleAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/employee/role`,
      method: "POST",
      body: userData,
    });
  }
  // get roles
  async getRolesAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/roles`,
      method: "GET",
      body: userData,
    });
  }
  // set permissions
  async setPermissionAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/employee/permissions/`,
      method: "POST",
      body: userData,
    });
  }

  // Passoword generator
  async createPasswordAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/spec/generator_password`,
      method: "POST",
      body: userData,
    });
  }
  // User me
  async reEnter() {
    return this._sendRequest({
      endpoint: "/admin/me",
      requiresToken: true,
    });
  }
}

export const mainApi = new MainApi(mainApiOptions);
