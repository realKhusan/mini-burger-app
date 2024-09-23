import { Button, Card, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function GetCode() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-[450px] shadow-lg p-3 mx-2">
        <Typography.Title level={3}>Код отправлен</Typography.Title>
        <Typography.Paragraph className="!mb-5">
          Мы отправили 6-значный код на вашу электронную почту. Пожалуйста,
          введите код до истечения времени.
        </Typography.Paragraph>
        <Form className="align-middle">
          <Form.Item className="flex justify-center">
            <Input.OTP size="large" length={6} />
          </Form.Item>
        </Form>

        <Button
          onClick={() => navigate("/home")}
          size="large"
          className="w-full bg-mainColor"
        >
          Отправка
        </Button>
      </Card>
    </div>
  );
}

export default GetCode;
