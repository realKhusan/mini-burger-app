import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login-burger.svg";
import { Button, Form, Input, Radio, Typography, message } from "antd";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (location.pathname === "/login") {
      navigate("/home");
      message.success("Добро пожаловать! Вы успешно вошли в систему.");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-thirdColor">
      <div className="grid grid-cols-1 sm:w-[60%] md:w-auto !overflow-hidden sm:px-4 md:px-5 md:grid-cols-2 !rounded-3xl">
        <div className="flex flex-col justify-between w-screen h-screen px-5 bg-white md:w-full sm:w-full sm:h-auto py-7 sm:px-10 md:px-14">
          <div>
            <Typography.Title className=" !text-3xl sm:!text-3xl !bm-0 sm:text-center md:text-left">
              {location.pathname === "/login"
                ? "Авторизоваться"
                : "Зарегистрироваться"}
            </Typography.Title>
            <Form className="!mb-0 outline-none" layout="vertical">
              <Form.Item label="Электронная почта">
                <Input className="!w-full" type="email" size="large" />
              </Form.Item>
              <Form.Item label="Пароль">
                <Input className="!w-full" type="password" size="large" />
              </Form.Item>
            </Form>
            <Radio className="mb-5">Запомнить меня</Radio>
          </div>
          <div>
            <Button
              onClick={handleSubmit}
              size="large"
              className="w-full mb-3 text-white hover:!text-white hover:!bg-orange-600 bg-secondColor"
            >
              {location.pathname === "/login"
                ? "Авторизоваться"
                : "Зарегистрироваться"}
            </Button>
            <Typography.Paragraph>
              {location.pathname === "/login" ? (
                <>
                  У вас нет учетной записи?{" "}
                  <Link to="/sign-up">зарегистрироваться</Link>
                </>
              ) : (
                <>
                  У вас уже есть аккаунт?{" "}
                  <Link to="/login">Авторизоваться</Link>
                </>
              )}
            </Typography.Paragraph>
          </div>
        </div>
        <div className="items-center hidden md:flex bg-mainColor">
          <img src={login} className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
