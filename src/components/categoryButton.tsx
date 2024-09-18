import { Button } from "antd";

function CategoryButton({ img, title }: { img: string; title: string }) {
  return (
    <Button shape="round" className="shadow border-none !text-black flex gap-2">
      <img src={img} alt="" />
      {title}
    </Button>
  );
}

export default CategoryButton;
