import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Radio, Typography, message } from "antd";
import { useSelector } from "react-redux";
import image from "../assets/login-burger.svg";
import { RootState } from "../store/store";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const [form] = useForm();
  const handleSubmit = async (values: {
    phoneNumber: string;
    password: string;
  }) => {
    console.log("form", values.password, values.phoneNumber);

    try {
      const response = await axios.post(
        "http://13.60.232.175:8080/api/customer/login",
        {
          phoneNumber: values.phoneNumber,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        localStorage.setItem("token", accessToken);
        console.log("Token:", accessToken);
        navigate("/home");
        message.success("Добро пожаловать! Вы успешно вошли в систему.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Login muvaffaqiyatsiz:",
          error.response?.data.errorMessage
        );
        message.error(error.response?.data.errorMessage || "Kirishda xato.");
      } else {
        console.error("Unknown error:", error);
        message.error("Kirishda noaniq xato.");
      }
    }
  };

  form.resetFields();

  return (
    <div
      className={`flex items-center  justify-center h-screen ${
        mode === "light" ? "bg-thridColor" : "bg-secondColor"
      }`}
    >
      <div className="grid grid-cols-1 sm:w-[60%] md:w-auto  md:mx-5 shadow-lg md:grid-cols-2 sm:rounded-3xl overflow-hidden">
        <div
          className={`flex flex-col overflow-hidden justify-between bg-opacity-20 w-screen h-screen px-5 bg-white  md:w-full sm:w-full sm:h-auto py-7 sm:px-10 md:px-14`}
        >
          <div>
            <Typography.Title className=" !text-3xl  sm:!text-3xl !bm-0 sm:text-center md:text-left">
              Авторизоваться
            </Typography.Title>
            <Form
              requiredMark={false}
              form={form}
              onFinish={handleSubmit}
              className="!mb-0"
              layout="vertical"
            >
              <Form.Item
                name="phoneNumber"
                label="Номер телефона"
                rules={[{ required: true, message: "Введите номер телефона" }]}
              >
                <Input
                  placeholder="Введите номер телефона"
                  className="!w-full"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="Пароль"
                rules={[{ required: true, message: "Введите пароль" }]}
              >
                <Input.Password
                  placeholder="Введите пароль"
                  className="!w-full"
                  size="large"
                />
              </Form.Item>
            </Form>
            <Radio className="mb-5">Запомнить меня</Radio>
          </div>
          <div>
            <Button
              onClick={() => form.submit()}
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
