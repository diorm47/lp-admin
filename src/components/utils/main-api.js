const mainApiOptions = {
  baseUrl: "https://legadrop.org",
  // baseUrl: "http://192.168.1.8:8000",

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
  // delete employee
  async deleteEmployeeAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/employee`,
      method: "DELETE",
      body: userData,
    });
  }
  // set role
  async setRoleAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/assign/role`,
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
      endpoint: `/admin/assign/permission`,
      method: "POST",
      body: userData,
    });
  }
  // get permissions
  async getPermissionAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/permissions`,
      method: "GET",
      body: userData,
    });
  }
  // get role permissions
  async getRolePermissionAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/role/permissions/?role_name=${userData}`,
      method: "GET",
    });
  }
  // set case category
  async setCaseCategoryAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/category`,
      method: "POST",
      body: userData,
    });
  }
  // get case category
  async getCaseCategoryAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/categories`,
      method: "GET",
      body: userData,
    });
  }
  // delete case category
  async deleteCaseCategoryAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/category`,
      method: "DELETE",
      body: userData,
    });
  }
  // update case category
  async updateCaseCategoryAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/category`,
      method: "PUT",
      body: userData,
    });
  }
  // create case
  async createCase(userData) {
    return this._sendRequest({
      endpoint: `/admin/case`,
      method: "POST",
      body: userData,
    });
  }
  // get case
  async getCase(userData) {
    return this._sendRequest({
      endpoint: `/admin/cases`,
      method: "GET",
      body: userData,
    });
  }
  // get items
  async getItems(userData) {
    return this._sendRequest({
      endpoint: `/admin/items`,
      method: "GET",
      body: userData,
    });
  }
  // get case items
  async getCaseItems(userData) {
    return this._sendRequest({
      endpoint: `/admin/case/${userData}/items`,
      method: "GET",
    });
  }
  // create case item
  async createCaseItem(userData) {
    return this._sendRequest({
      endpoint: `/admin/case/item`,
      method: "POST",
      body: userData,
    });
  }
  // Passoword generator
  async createPasswordAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/spec/generator/password`,
      method: "POST",
      body: userData,
    });
  }
  // create positions
  async createPositionAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/role`,
      method: "POST",
      body: userData,
    });
  }

  // Get Case 

  async getCaseAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/case`,
      method: "POST",
      body: userData,
    });
  }
  async deleteItemAction(userData) {
    return this._sendRequest({
      endpoint: `/admin/item`,
      method: "DELETE",
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
