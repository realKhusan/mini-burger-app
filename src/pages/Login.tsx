import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Radio, Typography, message } from "antd";
import { useSelector } from "react-redux";
import image from "../assets/login-burger.svg";
import { RootState } from "../store/store";

function Login() {
  const navigate = useNavigate();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const handleSubmit = () => {
    navigate("/home");
    message.success("Добро пожаловать! Вы успешно вошли в систему.");
  };

  return (
    <div
      className={`flex items-center  justify-center h-screen ${
        mode === "light" ? "bg-thridColor" : "bg-[#191919]"
      }`}
    >
      <div className="grid grid-cols-1 sm:w-[60%] md:w-auto sm:px-4 md:px-5 md:grid-cols-2 rounded-3xl overflow-hidden">
        <div
          className={`flex flex-col overflow-hidden justify-between w-screen h-screen px-5 ${
            mode === "light" ? "bg-white" : "bg-black"
          }  md:w-full sm:w-full sm:h-auto py-7 sm:px-10 md:px-14`}
        >
          <div>
            <Typography.Title className=" !text-3xl  sm:!text-3xl !bm-0 sm:text-center md:text-left">
              Авторизоваться
            </Typography.Title>
            <Form className="!mb-0 outline-none" layout="vertical">
              <Form.Item label="Электронная почта">
                <Input className="!w-full" type="email" size="large" />
              </Form.Item>
              <Form.Item label="Пароль">
                <Input className="!w-full" type="password" size="large" />

                <Link className="!text-right block mt-2" to="/forgot-password">
                  Забыли пароль?
                </Link>
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
              Авторизоваться
            </Button>
            <Typography.Paragraph>
              У вас нет учетной записи?
              <Link to="/sign-up"> зарегистрироваться</Link>
            </Typography.Paragraph>
          </div>
        </div>
        <div className="items-center hidden md:flex bg-mainColor">
          <img src={image} className="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
