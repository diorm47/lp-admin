const mainApiOptions = {
  baseUrl: "https://legadrop.org",
  // baseUrl: "http://192.168.1.4:8000",

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
      endpoint: `/login/legadrop`,
      method: "POST",
      body: userData,
    });
  }

  // User me
  async reEnter() {
    return this._sendRequest({
      endpoint: "/user/me",
      requiresToken: true,
    });
  }
}

export const mainApi = new MainApi(mainApiOptions);
