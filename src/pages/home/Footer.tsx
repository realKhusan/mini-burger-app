//components
import { Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

//svg or images
import FooterLogo from "../../assets/footerLogo.svg";

//icons
import { FaInstagram, FaPhone, FaTelegramPlane } from "react-icons/fa";

//hooks
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

const { Title, Paragraph } = Typography;

function Footer() {
  const mode = useSelector((state: RootState) => state.main.mode);
  return (
    <footer
      className={`pt-[24px] sm:pt-[40px] md:pt-[50px] pb-[26px] md:pb-[40px]  ${mode === "light" ? "bg-white" : "bg-[#0C0C0C]"
        } `}
    >
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
          <Paragraph className="!mb-0 ">
            build by:
            <Link className="ms-5" to="https://t.me/MoonKnight_009">Husan Mirobidov</Link>
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
