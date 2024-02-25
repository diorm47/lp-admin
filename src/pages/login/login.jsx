import React, { useState } from "react";
import { InputWithLabel } from "../../components/utils/utils";
import "./login.css";

import { useDispatch } from "react-redux";
import { ReactComponent as Error } from "../../assets/icons/error-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo-dark.svg";
import { loginUserAction } from "../../redux/user-reducer";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Checked } from "../../assets/icons/remember-icon.svg";
import { mainApi } from "../../components/utils/main-api";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    mainApi
      .loginAction({
        username: login,
        password: password,
      })
      .then((res) => {
      
        if (res) {
          let is_logged = {
            is_logged: true,
          };
          dispatch(loginUserAction(is_logged));
          localStorage.setItem("token", res);
          navigate("/");
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
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
            label="Логин пользователя"
            value={login}
            event={setLogin}
          />
          <InputWithLabel
            id="user_password"
            label="Пароль пользователя"
            value={password}
            event={setPassword}
          />
        </div>
        <div className={error ? "login_error" : "login_error is_error"}>
          <Error />
          <p>Неверный логин или пароль</p>
        </div>
        <div className="login_btn_block">
          <div>
            <div className="remember_me_checkbox">
              {rememberMe ? (
                <Checked onClick={() => setRememberMe(!rememberMe)} />
              ) : (
                <div
                  className="remember_me_not_checked"
                  onClick={() => setRememberMe(!rememberMe)}
                ></div>
              )}
            </div>

            <p>Запомнить меня</p>
          </div>
          <button className="login_btn main_btn_template" onClick={handleLogin}>
            Войти
          </button>
        </div>
        <div className="password_recovery_btn">
          <p>
            Забыли пароль? <span>Восстановить</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
