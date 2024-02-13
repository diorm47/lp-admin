const mainApiOptions = {
  baseUrl: "https://legadrop.org",


  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
};
const path = '/6383d341-4d14-4868-81ba-3c6382f2128e'

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
      endpoint: `/sign-in`,
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
  // Get employee
  async getEmployee(userData) {
    return this._sendRequest({
      endpoint: `/admin/employee/${userData}`,
      method: "GET",
      // body: userData,
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
      endpoint: `/admin/role/permissions/?role=${userData}`,
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
      endpoint: `/cases`,
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
  // delete case items
  async deleteCaseItem(userData) {
    return this._sendRequest({
      endpoint: `/admin/case/item`,
      method: "DELETE",
      body: userData,
    });
  }
  // add items to case
  async addItemsCase(userData) {
    return this._sendRequest({
      endpoint: `/admin/case/add/items/list`,

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
  async deleteCase(userData) {
    return this._sendRequest({
      endpoint: `/admin/case`,
      method: "DELETE",
      body: userData,
    });
  }
  async updateCase(userData) {
    return this._sendRequest({
      endpoint: `/admin/case/update`,

      method: "PUT",
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
  async getCaseId(userData) {
    return this._sendRequest({
      endpoint: `/admin/case`,
      method: "GET",
      body: userData,
    });
  }
  async getRarity() {
    return this._sendRequest({
      endpoint: `/admin/group_category`,
      method: "GET",
    });
  }
  async updateRarity(data) {
    return this._sendRequest({
      endpoint: `/admin/group_category/update`,
      method: "POST",
      body: data,
    });
  }
  async getItem(id) {
    return this._sendRequest({
      endpoint: `/admin/items/${id}`,
      method: "GET",
    });
  }
  async updateItem(data) {
    return this._sendRequest({
      endpoint: `/admin/item`,
      method: "PUT",
      body: data,
    });
  }
  async setPagePerm(data) {
    return this._sendRequest({
      endpoint: `/admin/assign/page`,
      method: "POST",
      body: data,
    });
  }
  async getRolePages(data) {
    return this._sendRequest({
      endpoint: `/admin/role/pages/?role=${data}`,
      method: "GET",
      // body: data,
    });
  }

  // get conclusions
  async getConclusions(data) {
    return this._sendRequest({
      endpoint: `/api/v1/output`,
      method: "GET",
      // body: data,
    });
  }
  async getConclusion(data) {
    return this._sendRequest({
      endpoint: `/api/v1/output/${data}`,
      method: "GET",
    });
  }

  // Moogold
  async purcgaseItem(data) {
    return this._sendRequest({
      endpoint: `/api/v1/moogold/purchase/outputs/item`,
      method: "POST",
      body: data,
    });
  }
  async getMoogoldBalance() {
    return this._sendRequest({
      endpoint: `/api/v1/moogold/balance`,
      method: "GET",
    });
  }
  async cancelConclusion(data) {
    return this._sendRequest({
      endpoint: `/api/v1/output/${data}/cancelled`,
      method: "PUT",
    });
  }

  async getOrderID(data) {
    return this._sendRequest({
      endpoint: `/api/v1/moogold/${data}/order/list`,
      method: "GET",
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
