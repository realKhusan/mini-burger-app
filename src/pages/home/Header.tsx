//components
import { Button, Dropdown, Menu, Switch, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

//svg or images
import EllipseSvg from "../../assets/ellipse.svg";
import burgerSvg from "../../assets/burger.svg";
import logo from "../../assets/Logo.svg";

//icons
import { MdLogout, MdOutlineTranslate } from "react-icons/md";
import { toggleMode, updateUser } from "../../store/slices/MainReducer";
import { IoSettingsOutline } from "react-icons/io5";

//hooks
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa6";
import checkUser from "../../api/CheckUser";
import { useEffect } from "react";
import { RootState } from "../../store/store";

//types

const { Title, Paragraph } = Typography;

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.main.user);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchUser() {
      const userData = await checkUser(token);
      dispatch(updateUser(userData));
    }
    fetchUser();
  }, [token]);
  const navigate = useNavigate();
  const userDropdownItems = (
    <Menu>
      <Menu.Item key="1">
        <div style={{ fontWeight: "bold", color: "#888" }}>
          username: <span style={{ fontSize: "12px" }}>{user?.userName}</span>
        </div>
        <div style={{ fontWeight: "bold", color: "#888" }}>
          tel: <span style={{ fontSize: "12px" }}>{user?.phoneNumber}</span>
        </div>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => localStorage.removeItem("token")}>
        <Link className="flex items-center gap-5" to="/login">
          <MdLogout /> Log out
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link className="flex items-center gap-5" to="/login">
          <Paragraph className="flex items-center gap-5 !mb-0">
            <IoSettingsOutline /> настройки
          </Paragraph>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Paragraph className="flex items-center gap-5 !mb-0">
          <Switch size="small" onChange={() => dispatch(toggleMode())} /> ночной
          режим
        </Paragraph>
      </Menu.Item>
    </Menu>
  );
  return (
    <header
      style={{
        backgroundImage: `url(${EllipseSvg})`,
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
        <div className="flex !items-center justify-between">
          <img className="mb-5 logo" src={logo} alt="" />
          <div className="flex items-center gap-2">
            <Dropdown
              overlay={translateDropDownItems}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button
                size="large"
                className="bg-white hover:!bg-opacity-50  hover:scale-105 hover:!text-black hover:!bg-white !bg-opacity-25 border-none h-[40px]"
              >
                <MdOutlineTranslate /> En
              </Button>
            </Dropdown>
            <Dropdown
              overlay={userDropdownItems}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button
                onClick={() => {
                  if (token === null) navigate("/login");
                }}
                size="large"
                className="bg-white hover:!bg-opacity-50  hover:scale-105 hover:!text-black hover:!bg-white !bg-opacity-25 border-none h-[40px] "
              >
                {token ? <FaUser /> : "Kirish"}
              </Button>
            </Dropdown>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-5 text-center md:text-start md:flex-row">
          <img src={burgerSvg} alt="" />
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
    </header>
  );
}

export default Header;

const translateDropDownItems = (
  <Menu>
    <Menu.Item key={1}>
      <div className="flex gap-2">
        <img
          src="https://cdn.commeta.uz/static/review/static/front/svg/flag/uz.svg"
          alt=""
        />
        <Typography.Paragraph className="!mb-0">Uz</Typography.Paragraph>
      </div>
    </Menu.Item>
    <Menu.Item key={2}>
      <div className="flex gap-2">
        <img
          src="https://cdn.commeta.uz/static/review/static/front/svg/flag/uz.svg"
          alt=""
        />
        <Typography.Paragraph className="!mb-0">Уз</Typography.Paragraph>
      </div>
    </Menu.Item>
    <Menu.Item key={3}>
      <div className="flex gap-2">
        <img
          src="https://cdn.commeta.uz/static/review/static/front/svg/flag/en.svg"
          alt=""
        />
        <Typography.Paragraph className="!mb-0">En</Typography.Paragraph>
      </div>
    </Menu.Item>
    <Menu.Item key="4">
      <div className="flex gap-2">
        <img
          src="https://cdn.commeta.uz/static/review/static/front/svg/flag/uz.svg"
          alt=""
        />
        <Typography.Paragraph className="!mb-0">Ру</Typography.Paragraph>
      </div>
    </Menu.Item>
  </Menu>
);
