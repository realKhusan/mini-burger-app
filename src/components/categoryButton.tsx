import { Button } from "antd";

function CategoryButton({ img, title }: { img: string; title: string }) {
  return (
    <Button shape="round" className="flex gap-2 border-none shadow">
      <img src={img} alt="" />
      {title}
    </Button>
  );
}

export default CategoryButton;
