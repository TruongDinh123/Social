import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/context/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };
  console.log(err);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1></h1>
          <p>
            "Tuổi trẻ, chúng ta chẳng có gì ngoài đôi chân khỏe mạnh và trái tim không biết sợ. Đó là những tháng ngày đẹp nhất,
            duy nhất của đời người để đi và học về thế giới."
          </p>
          <span>Bạn đã có tài khoản? Đăng nhập nhé !</span>
          <Link to="/login">
            <button>Đăng nhập</button>
          </Link>
        </div>
        <div className="right">
          <h1>Đăng ký tài khoản</h1>
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
            <input
              type="text"
              placeholder="Họ tên"
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
