import styled from "@emotion/styled";
import ScuterImg from "../assets/scuter24x.svg";
import {
  Button,
  Card,
  Divider as AntdDivider,
  Typography,
  Tag,
  Form,
  Radio,
  Input,
  Space,
  RadioChangeEvent,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaLocationDot } from "react-icons/fa6";
import DonutImg from "../assets/donut.svg";
import { RootState } from "../store/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import { IoClose } from "react-icons/io5";
const { Title, Text } = Typography;
const Divider = styled(AntdDivider)`
  margin-block: 3px !important;
`;
function Basket() {
  const mode = localStorage.getItem("mode");
  const products = useSelector((state: RootState) => state.products.data);
  const [basket, setBasket] = useState(false);
  const basketRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const isOrderModal = searchParams.get("order") === "true";
  const [formRadio, setFormRadio] = useState(1);
  const navigate = useNavigate();
  const userBasket = useSelector((state: RootState) => state.main.basket);
  const handleBasket = () => {
    setBasket(true);
  };
  const formRadioOnChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setFormRadio(e.target.value);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (basketRef.current && !basketRef.current.contains(e.target as Node)) {
      setBasket(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Card
        onClick={handleBasket}
        ref={basketRef}
        className={`cursor-pointer transition-all w-full ${
          basket ? " w-full sm:w-[150%]   shadow-2xl md:shadow-none" : ""
        }  !absolute !top-0   md:cursor-default md:w-auto sm:!sticky  md:h-auto  md:!sticky md:!top-0 p-3 !rounded-2xl mb-2 sm:mb-[4.5px] md:mb-[5px] lg:mb-[10px]`}
      >
        <div className="flex items-center justify-between mb-0 md:mb-3">
          <Title className="!text-sm !mb-0 md:!text-xl lg:!text-2xl ">
            Корзина
          </Title>
          <Tag
            className={`!border-none ${
              mode === "light" ? "bg-thridColor" : ""
            } px-3 !m-0`}
          >
            {0}
          </Tag>
        </div>

        {userBasket &&
        userBasket.products &&
        userBasket.products.length !== 0 ? (
          <div className={`${basket ? "block " : "hidden md:block "} `}>
            <Divider />
            {userBasket.products.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <img
                      className="!aspect-[2/1.35] w-[100px] rounded"
                      src={products.find((i) => i.id === item.productId)?.image}
                      alt=""
                    />
                    <div className="!text-xs flex flex-col">
                      <Text className="text-[10px] font-bold">
                        {products.find((i) => i.id === item.productId)?.title}
                      </Text>
                      <Text>
                        {products.find((i) => i.id === item.productId)?.weight}{" "}
                        g
                      </Text>
                      <Text>
                        {products.find((i) => i.id === item.productId)?.price}
                      </Text>
                    </div>
                  </div>
                  <Button.Group size="small">
                    <Button>-</Button>
                    <Button>{item.quantity}</Button>
                    <Button>+</Button>
                  </Button.Group>
                </div>
                <Divider />
              </div>
            ))}
            <div className="flex justify-between mb-3">
              <Text>Итого</Text>
              <Text>1279₽</Text>
            </div>
            <Button
              onClick={() => setSearchParams({ order: "true" })}
              size="large"
              className={`w-full mb-2  text-white bg-secondColor !rounded-xl`}
            >
              Оформить заказ
            </Button>
            <div className="flex items-center gap-3">
              <img src={ScuterImg} alt="" />
              <Text className="text-xs">Бесплатная доставка</Text>
            </div>
          </div>
        ) : (
          <Text className="">{"Тут пока пусто :("}</Text>
        )}
      </Card>
      <Modal open={isOrderModal}>
        <div className="h-full md:grid md:grid-cols-2">
          <div className="items-center justify-center hidden p-4 md:flex bg-mainColor">
            <img className="w-full" src={DonutImg} alt="" />
          </div>
          <div className="flex flex-col justify-between h-full p-4">
            <div>
              <div className="flex justify-between mb-4">
                <Typography.Title level={3} className="!mb-0">
                  Modal Title
                </Typography.Title>
                <button
                  className="text-2xl text-slate-500 modal-close"
                  onClick={() => navigate(-1)}
                >
                  <IoClose />
                </button>
              </div>
              <Form className="mb-3">
                <Form.Item>
                  <Input size="large" placeholder="Второй телефон" />
                </Form.Item>
                <Radio.Group
                  className="mb-5"
                  onChange={formRadioOnChange}
                  value={formRadio}
                >
                  <Space direction="vertical">
                    <Radio value={1}>Самовывоз</Radio>
                    <Radio value={2}>Доставка на мой адрес</Radio>
                    <Radio value={3}>Доставка в другое место</Radio>
                  </Space>
                </Radio.Group>
                {formRadio === 3 && (
                  <>
                    <Form.Item>
                      <Input size="large" placeholder="Улица, дом, квартира" />
                    </Form.Item>
                    <Form.Item>
                      <Space.Compact className="!w-full">
                        <Input
                          placeholder="Адрес на карте"
                          size="large"
                          defaultValue="Combine input and button"
                        />
                        <Button size="large" type="primary">
                          <FaLocationDot />
                        </Button>
                      </Space.Compact>
                    </Form.Item>
                    <div className="grid grid-cols-2 gap-4">
                      <Form.Item>
                        <Input size="large" placeholder="Этаж" />
                      </Form.Item>
                      <Form.Item>
                        <Input size="large" placeholder="Домофон" />
                      </Form.Item>
                    </div>
                  </>
                )}
              </Form>
            </div>

            <Button size="large" className="w-full text-white bg-secondColor">
              Оформить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Basket;
