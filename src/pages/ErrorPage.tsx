import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200">
      <Typography.Title className="!text-8xl !m-0 !text-mainColor">
        404
      </Typography.Title>
      <Typography.Title level={3} className="!text-mainColor">
        Page not found
      </Typography.Title>
      <Button
        onClick={() => navigate(-1)}
        size="large"
        className="!bg-mainColor hover:!text-white"
      >
        Back
      </Button>
    </div>
  );
}

export default ErrorPage;
