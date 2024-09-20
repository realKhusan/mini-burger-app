import { Spin } from "antd";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin size="large" />
    </div>
  );
}

export default Loading;
