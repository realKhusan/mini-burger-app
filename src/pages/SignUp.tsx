import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Button, Form, Input, Radio, Space, Typography, message } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useForm } from "antd/es/form/Form";
import { FaLocationDot } from "react-icons/fa6";
import Modal from "../components/Modal";

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParamas] = useSearchParams();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const openModal = params.get("maps") === "true";
  const [form] = useForm();
  const handleSubmit = () => {
    if (location.pathname === "/login") {
      navigate("/home");
      message.success("Добро пожаловать! Вы успешно вошли в систему.");
    }
  };

  return (
    <div className={`flex items-center  bgVerse  justify-center h-screen`}>
      <div
        className={`flex flex-col justify-between shadow-lg h-screen w-[100%] sm:!w-[70%] md:w-[65%] lg:!w-[50%]  rounded-2xl overflow-hidden  px-5 ${
          mode === "light" ? "bg-white" : "bg-black"
        }  md:w-full sm:w-full sm:h-auto p-4 py-4 sm:py-7  sm:px-10 md:px-14`}
      >
        <div>
          <Typography.Title className=" !text-2xl sm:!text-3xl sm:!bm-0 sm:text-center md:text-left">
            Зарегистрироваться
          </Typography.Title>
          <Form
            form={form}
            className="!mb-0 grid grid-cols-1  md:grid-cols-2 md:gap-x-5 "
            layout="vertical"
          >
            <Form.Item label="Имя пользователя">
              <Input className="!w-full" size="large"></Input>
            </Form.Item>
            <Form.Item label="Номер телефона">
              <Input className="!w-full" size="large"></Input>
            </Form.Item>
            <Form.Item label="Адрес">
              <Input className="!w-full" size="large"></Input>
            </Form.Item>
            <Form.Item label="Адрес на карте">
              <Space.Compact className="!w-full">
                <Input size="large" defaultValue="Combine input and button" />
                <Button
                  onClick={() => setParamas({ maps: "true" })}
                  size="large"
                  type="primary"
                >
                  <FaLocationDot />
                </Button>
              </Space.Compact>
            </Form.Item>
            <Form.Item label="Пароль">
              <Input.Password
                className="!w-full"
                type="password"
                size="large"
              />
            </Form.Item>
            <Form.Item label="Повторите пароль">
              <Input.Password
                className="!w-full"
                type="password"
                size="large"
              />
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
            Зарегистрироваться
          </Button>
          <Typography.Paragraph>
            У вас уже есть аккаунт? <Link to="/login">Авторизоваться</Link>
          </Typography.Paragraph>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setParamas({})}>
        <div>salom</div>
      </Modal>
    </div>
  );
}

export default SignUp;
