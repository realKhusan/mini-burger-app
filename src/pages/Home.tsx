/** @jsxImportSource @emotion/react */
import { Fragment } from "react/jsx-runtime";
import burger from "../assets/burger.svg";
import logo from "../assets/Logo.svg";
import {
  Button,
  Col,
  Card as AntCard,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Tag,
  Typography,
  Divider as AntdDivider,
  Pagination,
  Dropdown,
} from "antd";
import styled from "@emotion/styled";
import CategoryButton from "../components/categoryButton";
import FooterLogo from "../assets/footerLogo.svg";
import { FaInstagram, FaPhone, FaTelegramPlane } from "react-icons/fa";
import Modal from "../components/Modal";
import C from "../assets/ellipse.svg";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import DonutImg from "../assets/donut.svg";
import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import OrderQuantity from "../components/OrderQuantity ";
import ScuterImg from "../assets/scuter24x.svg";
import type { MenuProps } from "antd";
import { BiUser } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import Switch from "../components/Switch";
const { Title, Paragraph, Link, Text } = Typography;

const Divider = styled(AntdDivider)`
  margin-block: 3px !important;
`;
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        className="flex items-center gap-5"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <MdLogout /> Log out
      </Link>
    ),
  },
];

function Home() {
  const [radio, setRadio] = useState(1);
  const [basket, setBasket] = useState(false);
  const basketRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isOrderModal = searchParams.get("order") === "true";
  const handleCancel = () => {
    navigate("");
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setRadio(e.target.value);
  };

  const handleBasket = () => {
    setBasket(true);
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
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${C})`,
          height: "100%",
          backgroundSize: "cover",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
        }}
      >
        <div
          style={{ color: "white !important" }}
          className="container px-[10px] md:px-[15px] py-10 lg:px-5 mx-auto !text-white"
        >
          <div className="flex items-center justify-between">
            <img className="mb-5" src={logo} alt="" />
            <div className="flex items-center gap-2">
              <Switch></Switch>
              <Dropdown
                menu={{ items }}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <Button size="large" shape="circle">
                  <BiUser />
                </Button>
              </Dropdown>
            </div>
          </div>

          <div className="flex flex-col-reverse items-center justify-center gap-5 text-center md:text-start md:flex-row">
            <img src={burger} alt="" />
            <div>
              <Title className="!text-white">
                Только самые <br />
                <span className="text-secondColor">сочные бургеры!</span>
              </Title>
              <Paragraph className="!text-white">
                Бесплатная доставка от 599₽
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex justify-between h-full gap-3 px-2 py-5 mx-auto overflow-x-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return <CategoryButton key={item} img="" title={`${item}salom`} />;
        })}
      </div>
      <div className="container !z-50 px-[10px] md:px-[15px] lg:px-5  py-5 grid gap-5 mx-auto">
        <Row gutter={{ xs: 8, sm: 9, md: 10, lg: 20 }}>
          <Col span={24} sm={8} md={8} lg={6}>
            <div className="relative md:mt-[45px] z-30  sm:!sticky !top-[10px] h-[55px]">
              <AntCard
                onClick={handleBasket}
                ref={basketRef}
                className={`cursor-pointer transition-all w-full ${
                  basket
                    ? " w-full sm:w-[150%]   shadow-2xl md:shadow-none"
                    : ""
                }  !absolute !top-0   md:cursor-default md:w-auto sm:!sticky  md:h-auto  md:!sticky md:!top-0 p-3 !rounded-2xl mb-2 sm:mb-[4.5px] md:mb-[5px] lg:mb-[10px]`}
              >
                <div className="flex items-center justify-between mb-0 md:mb-3">
                  <Title className="!text-sm !mb-0 md:!text-xl lg:!text-2xl ">
                    Корзина
                  </Title>
                  <Tag className="!border-none bg-thridColor px-3 !m-0">0</Tag>
                </div>

                {[1, 2, 3, 4, 5].length !== 0 ? (
                  <div className={`${basket ? "block " : "hidden md:block "} `}>
                    <Divider />
                    <Paragraph>{"Тут пока пусто :("}</Paragraph>
                    <Paragraph>{"Тут пока пусто :("}</Paragraph>
                    <Paragraph>{"Тут пока пусто :("}</Paragraph>
                    <Paragraph>{"Тут пока пусто :("}</Paragraph>
                    <div className="flex justify-between mb-3">
                      <Text>Итого</Text>
                      <Text>1279₽</Text>
                    </div>
                    <Button
                      onClick={() => setSearchParams({ order: "true" })}
                      size="large"
                      className="w-full mb-2  text-white bg-secondColor !rounded-xl"
                    >
                      Оформить заказ
                    </Button>
                    <div className="flex items-center gap-3">
                      <img src={ScuterImg} alt="" />
                      <Text className="text-xs">Бесплатная доставка</Text>
                    </div>
                  </div>
                ) : (
                  <Text className="hidden md:block">{"Тут пока пусто :("}</Text>
                )}
              </AntCard>
            </div>
          </Col>
          <Col span={24} sm={24} md={16} lg={18}>
            <Col span={12} sm={8} lg={8} md={12}>
              <Title level={3} className="!-z-30">
                Бургер
              </Title>
            </Col>
            <Row gutter={{ xs: 8, sm: 9, md: 10, lg: 20 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <Col key={index} span={12} sm={8} lg={8} md={12}>
                  <Card item={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Pagination align="center" defaultCurrent={1} total={50} />
      </div>
      <footer className="pt-[24px] sm:pt-[40px] md:pt-[50px] pb-[26px] md:pb-[40px] bg-white">
        <div className="container px-[10px] md:px-[15px] lg:px-5  mx-auto ">
          <Row>
            <Col span={24} md={12} lg={12}>
              <img className="w-[200px] md:w-[300px]" src={FooterLogo} alt="" />
            </Col>
            <Col className="mb-2" span={24} md={6} sm={12}>
              <Title level={4}>Номер для заказа</Title>
              <Paragraph className="flex items-center gap-2 !mb-0">
                <FaPhone />
                +7(930)833-38-11
              </Paragraph>
            </Col>
            <Col className="mb-2" span={24} md={6} sm={12}>
              <Title level={4}>Мы в соцсетях</Title>
              <div className="flex gap-3">
                <Button
                  className="text-white bg-mainColor"
                  size="large"
                  shape="circle"
                >
                  <FaInstagram />
                </Button>
                <Button
                  className="text-white bg-mainColor"
                  size="large"
                  shape="circle"
                >
                  <FaTelegramPlane />
                </Button>
              </div>
            </Col>
          </Row>
          <div>
            <Paragraph className="!mb-0">
              © YouMeal, {new Date().getFullYear()}
            </Paragraph>
            <Paragraph className="!mb-0">
              build by:
              <Link href="https://t.me/MoonKnight_009">Husan Mirobidov</Link>
            </Paragraph>
          </div>
        </div>
      </footer>
      <Modal open={!!params.sku} onClose={handleCancel}>
        <div className="flex flex-col flex-grow h-full p-4">
          <div className="flex justify-between mb-3">
            <Typography.Title level={3} className="!mb-0">
              Modal Title
            </Typography.Title>
            <button
              className="text-2xl text-slate-500 modal-close"
              onClick={handleCancel}
            >
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col justify-between gap-3 mb-7 sm:flex-row">
              <div className="w-full sm:w-[45%]">
                <img
                  className="rounded-xl"
                  src="https://avatars.mds.yandex.net/i?id=c9af1347164f45a6f1a8a44cd275ba66d5ffe777-5436289-images-thumbs&n=13"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-[55%]">
                <Paragraph className="text-md sm:text-sm md:text-md lg:text-lg">
                  Супер мясное наслаждение! Большая рубленая котлета из свежего
                  говяжего мяса покорит вас своей сочностью, а хрустящие листья
                  салата добавят свежести.
                </Paragraph>
                <Paragraph>Состав:</Paragraph>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                size="large"
                className="text-white w-[75%] sm:w-[45%] bg-secondColor rounded-xl "
              >
                Добавить
              </Button>
              <div className="flex justify-end  flex-col sm:flex-row w-[25%]  sm:w-[55%]  sm:justify-between">
                <OrderQuantity />
                <Title level={3} className="!mb-0 text-right sm:text-left">
                  689₽
                </Title>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={isOrderModal}
        onClose={() => {
          setSearchParams({});
        }}
      >
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
                  onClick={handleCancel}
                >
                  <IoClose />
                </button>
              </div>
              <Form className="mb-3">
                <Form.Item>
                  <Input size="large" placeholder="Ваше имя" />
                </Form.Item>
                <Form.Item>
                  <Input size="large" placeholder="Телефон" />
                </Form.Item>
                <Form.Item>
                  <Input size="large" placeholder="Улица, дом, квартира" />
                </Form.Item>
                <Radio.Group className="mb-5" onChange={onChange} value={radio}>
                  <Space direction="vertical">
                    <Radio value={1}>Самовывоз</Radio>
                    <Radio value={2}>Доставка</Radio>
                  </Space>
                </Radio.Group>

                {radio === 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    <Form.Item>
                      <Input size="large" placeholder="Этаж" />
                    </Form.Item>
                    <Form.Item>
                      <Input size="large" placeholder="Домофон" />
                    </Form.Item>
                  </div>
                )}
              </Form>
            </div>

            <Button size="large" className="w-full text-white bg-secondColor">
              Оформить
            </Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default Home;
