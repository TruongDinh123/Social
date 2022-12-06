import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { GoogleLogin } from "react-google-login";
import "./login.scss";
import { gapi } from "gapi-script";

const clientId =
  "232849903347-raa0f7579qbi3ddm3fvlnroicqsf4uqs.apps.googleusercontent.com";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/"); //thành công thì đăng nhập chuyển qua website
    } catch (err) {
      setErr(err.response.data);
    }
    login();
  };

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // }, []);
  // const onSuccess = (res) => {
  //   console.log("Login successful", res.profileObj);
  //   navigate("/");
  // };

  const onFailure = (res) => {
    console.log("Login failed", res);
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>VieTripSocial</h1>
          <p>
            Nếu không thể tìm được bạn đồng hành, hãy cứ đi. Bởi khi đến nơi, bạn sẽ thấy họ ở đó !
          </p>
          <span>Bạn chưa có tài khoản? Đăng ký nhé !</span>
          <Link to="/register">
            <button>Đăng ký</button>
          </Link>
        </div>
        <div className="right">
          <h1>Đăng nhập</h1>
          <form>
            <input
              type="text"
              placeholder="Tài khoản"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Đăng nhập</button>
            <div id="signInGoogle">
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                // onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
