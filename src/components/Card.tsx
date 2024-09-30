import { Button, Card as AntdCard, Typography } from "antd";
import { IProduct } from "../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const { Title, Paragraph } = Typography;

function Card({ item, onClick }: { item: IProduct; onClick: () => void }) {
  const mode = useSelector((state: RootState) => state.main.mode);

  return (
    <AntdCard
      onClick={onClick}
      className=" p-2 md:p-3  cursor-pointer !rounded-2xl mb-2 sm:mb-[9px] md:mb-[10px] lg:mb-[20px]"
    >
      <img
        className="mb-2 rounded-xl w-full aspect-[2/1.2] position-center border"
        src={item.image}
        alt=""
      />
      <Title level={3} className="!mb-0">
        {item.price}
      </Title>
      <Paragraph className="!mb-4">{item.title}</Paragraph>
      <Paragraph type="secondary" className="block !mb-1">
        {item.weight}
      </Paragraph>
      <Button
        size="large"
        onClick={(e) => {
          e.stopPropagation(); // Bu faqat Button uchun ishlaydi
        }}
        className={`w-full !rounded-xl hover:!scale-105 !cursor-pointer ${
          mode === "light"
            ? "bg-thridColor hover:!text-black hover:!bg-gray-200"
            : " bg-mainColor"
        } `}
      >
        Добавить
      </Button>
    </AntdCard>
  );
}

export default Card;
