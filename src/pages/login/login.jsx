import React, { useState } from "react";
import { InputWithLabel } from "../../components/utils/utils";
import "./login.css";

import { ReactComponent as Logo } from "../../assets/logo-dark.svg";
import { ReactComponent as Error } from "../../assets/icons/error-icon.svg";
import { mainApi } from "../../components/utils/main-api";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/user-reducer";

function LoginPage() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      username: login,
      password: password,
    };
    mainApi
      .loginAction(data)
      .then((res) => {
        dispatch(loginUserAction(res));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="login_page">
      <div className="login_modal">
        <div className="login_logo">
          <Logo />
        </div>
        <div className="logo_form  add_employe_input">
          <InputWithLabel
            id="user_login"
            label="Логин"
            value={login}
            event={setLogin}
          />
          <InputWithLabel
            id="user_password"
            label="Пароль"
            value={password}
            event={setPassword}
          />
        </div>
        <div className="login_error is_error">
          <Error />
          <p>Неверный логин или пароль</p>
        </div>
        <div className="login_btn_block">
          <div>
            <input type="checkbox" defaultChecked />
            <p>Запомнить меня</p>
          </div>
          <button className="login_btn" onClick={handleLogin}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
