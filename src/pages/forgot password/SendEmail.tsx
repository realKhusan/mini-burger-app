import { Button, Card, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function SendEmail() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="p-5 max-w-[400px] shadow-lg mx-3">
        <Typography.Title level={3}>Забыли пароль?</Typography.Title>
        <Typography.Paragraph>
          Введите свой адрес электронной почты. Мы вышлем вам ссылку для сброса
          пароля.
        </Typography.Paragraph>
        <Form layout="vertical">
          <Form.Item label="Электронная почта">
            <Input
              type="email"
              size="large"
              placeholder="Электронная почта"
            ></Input>
          </Form.Item>
        </Form>

        <Button
          onClick={() => navigate("/get-the-code")}
          size="large"
          className="w-full bg-mainColor"
        >
          Submit
        </Button>
      </Card>
    </div>
  );
}

export default SendEmail;
