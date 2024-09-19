import { Button, Card as AntdCard, Typography, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../types/types";
const { Title, Paragraph } = Typography;
function Card({ item }: { item: IProduct }) {
  const navigate = useNavigate();
  return (
    <AntdCard
      onClick={() => navigate(`${""}`)}
      className=" p-2 md:p-3 -z-10  hover:!cursor-pointer !rounded-2xl  mb-2 sm:mb-[9px] md:mb-[10px] lg:mb-[20px]"
    >
      <Skeleton.Image
        size={"small"}
        active
        className="!w-full !h-[170px] sm:!h-[120px] md:!h-[160px] lg:!h-[170px] mb-2  !rounded-xl"
      />
      <Skeleton size={"small"} active className="mb-1" />
      {/* <img className="mb-2 rounded-xl h-[170px] position-center" src={item.image} alt="" />
      <Title level={3} className="!mb-0">
        {item.price}
      </Title>
      <Paragraph className="!mb-4">{item.title}</Paragraph>
      <Paragraph type="secondary" className="block !mb-1">
        {item.weight}
      </Paragraph> */}
      <Button
        size="large"
        className="w-full !rounded-xl bg-thridColor border-none hover:!text-black hover:!bg-gray-200"
      >
        Добавить
      </Button>
    </AntdCard>
  );
}

export default Card;
