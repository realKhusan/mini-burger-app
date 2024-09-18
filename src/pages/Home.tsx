/** @jsxImportSource @emotion/react */
import { Fragment } from "react/jsx-runtime";
import burger from "../assets/burger.svg";
import logo from "../assets/Logo.svg";
import { Button, Card, Col, Row, Tag, Typography } from "antd";
import CategoryButton from "../components/categoryButton";
import FooterLogo from "../assets/footerLogo.svg";
import { FaInstagram, FaPhone, FaTelegramPlane } from "react-icons/fa";
import Modal from "../components/Modal";
import C from "../assets/ellipse.svg";
import { useNavigate, useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const { Title, Paragraph, Link, Text } = Typography;

function Home() {
  const navigate = useNavigate();
  const params = useParams();
  const handleCancel = () => {
    navigate("");
  };
  const openModal = (id: number) => {
    navigate(`${id}`);
  };
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
        className="py-5 "
      >
        <div
          style={{ color: "white !important" }}
          className="container px-[10px] md:px-[15px] py-5 lg:px-5 mx-auto !text-white"
        >
          <img className="mb-5" src={logo} alt="" />
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
      <div className="container px-[10px] md:px-[15px] lg:px-5  py-5 grid gap-5 mx-auto">
        <Row gutter={{ xs: 8, sm: 9, md: 10, lg: 20 }}>
          <Col className="" span={24} sm={6} md={8} lg={6}>
            <Card className=" md:!sticky md:!top-0 p-3 !rounded-2xl mb-2 sm:mb-[4.5px] md:mb-[5px] lg:mb-[10px]">
              <div className="flex items-center justify-between mb-0 md:mb-3">
                <Title className="!text-sm !mb-0 md:!text-xl lg:!text-2xl ">
                  Корзина
                </Title>
                <Tag className="!border-none bg-thridColor px-3 !m-0">0</Tag>
              </div>
              <Paragraph className="hidden md:block">
                {"Тут пока пусто :("}
              </Paragraph>
            </Card>
          </Col>
          <Col span={24} sm={24} md={16} lg={18}>
            <Row gutter={{ xs: 8, sm: 9, md: 10, lg: 20 }}>
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19,
              ].map((item) => (
                <Col span={12} sm={6} lg={8} md={12}>
                  <Card
                    onClick={() => openModal(item)}
                    className=" p-2 md:p-3  hover:!cursor-pointer !rounded-2xl  mb-2 sm:mb-[9px] md:mb-[10px] lg:mb-[20px]"
                  >
                    <img
                      className="mb-2 rounded-xl"
                      src="https://avatars.mds.yandex.net/i?id=c9af1347164f45a6f1a8a44cd275ba66d5ffe777-5436289-images-thumbs&n=13"
                      alt=""
                    />
                    <Title level={3} className="!mb-0">
                      689₽
                    </Title>
                    <Paragraph className="!mb-4">Мясная бомба</Paragraph>
                    <Paragraph type="secondary" className="block !mb-1">
                      520г
                    </Paragraph>
                    <Button
                      size="large"
                      className="w-full !rounded-xl bg-thridColor border-none hover:!text-black hover:!bg-gray-200"
                    >
                      Добавить
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <footer className="pt-[24px] sm:pt-[40px] md:pt-[50px] pb-[26px] md:pb-[40px] bg-white">
        <div className="container px-[10px] md:px-[15px] lg:px-5  mx-auto ">
          <Row>
            <Col span={24} md={12} lg={12}>
              <img className="w-[300px]" src={FooterLogo} alt="" />
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
      <Modal open={!!params.id} onClose={handleCancel}>
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
                <div className="flex items-center justify-center gap-3 p-2 rounded-xl bg-thridColor">
                  <button>-</button>
                  <Text>1</Text>
                  <button>+</button>
                </div>
                <Title level={3} className="!mb-0 text-right sm:text-left">
                  689₽
                </Title>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default Home;
