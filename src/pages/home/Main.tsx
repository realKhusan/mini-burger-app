import mainApi from "@api/Request";
import Basket from "@components/Basket";
import Card from "@components/Card";
import Modal from "@components/Modal";
import OrderQuantity from "@components/OrderQuantity ";
import { updateBasket } from "@store/slices/MainReducer";
import { updateProducts } from "@store/slices/ProductReducer";
import { RootState } from "@store/store";
import { Col, Row, Typography, Button, Pagination, Empty } from "antd";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const { Title, Paragraph } = Typography;

function Main() {
  const products = useSelector((state: RootState) => state.products.data);
  const categroies = useSelector((state: RootState) => state.categories.data);
  const [productId, setProductId] = useState<string | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const categorySlug = params.category;
  const category = categroies.find((item) => item.slug === categorySlug)?.id;
  const user = useSelector((state: RootState) => state.main.user);

  const product = products.find((item) => item.id === productId);

  useEffect(() => {
    async function fetchData() {
      try {
        if (category) {
          const res = await mainApi.get(`/products?categoryId=${category}`);
          if (res.status === 200) {
            dispatch(updateProducts(res.data));
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (categroies.length > 0) {
      fetchData();
    }
  }, [category]);
  useEffect(() => {
    try {
      async function fetchBasket() {
        const res = await mainApi.get(`/basket?userId=${user.id}`);
        if (res.status == 200) {
          dispatch(updateBasket(res.data[0]));
        }
      }
      if (user.id) fetchBasket();
    } catch (e) {
      console.log("Landing Page(Main)", e);
    }
  }, [user]);

  return (
    <>
      <main className="container !z-50 px-[10px] md:px-[15px] lg:px-5  py-5 grid gap-5 mx-auto">
        <Row gutter={{ xs: 8, sm: 9, md: 10, lg: 20 }}>
          <Col span={24} sm={8} md={8} lg={6}>
            <div className="relative md:mt-[45px] z-30  sm:!sticky !top-[10px] h-[55px]">
              <Basket />
            </div>
          </Col>
          <Col span={24} sm={24} md={16} lg={18}>
            <Col span={12} sm={8} lg={8} md={12}>
              <Title level={3} className="!-z-30">
                {categorySlug
                  ? categorySlug[0].toUpperCase() + categorySlug.slice(1)
                  : "undef"}
              </Title>
            </Col>
            <Row gutter={{ xs: 8, sm: 9, md: 10, lg: 20 }}>
              {products.length !== 0 ? (
                products.map((item, index) => (
                  <Col key={index} span={12} sm={8} lg={8} md={12}>
                    <Card
                      onClick={() => {
                        setProductId(item.id);
                        navigate(
                          `category/${params.category}/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        );
                      }}
                      item={item}
                    />
                  </Col>
                ))
              ) : (
                <div className="flex justify-center items-center w-full sm:h-[318px] md:h-[352px] h-[284px]">
                  <Empty />
                </div>
              )}
            </Row>
          </Col>
        </Row>
        <Pagination align="center" defaultCurrent={1} total={50} />
      </main>
      <Modal open={!!params.product}>
        <div className="flex flex-col flex-grow h-full p-4">
          <div className="flex justify-between mb-3">
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
          <div className="flex flex-col justify-between h-full gap-5">
            <div className="flex flex-col justify-between gap-3 mb-7 sm:flex-row">
              <div className="w-full sm:w-[45%]">
                <img className="rounded-xl" src={product?.image} alt="" />
              </div>
              <div className="w-full sm:w-[55%]">
                <Paragraph className="text-md sm:text-sm md:text-md lg:text-lg">
                  {product?.desc}
                </Paragraph>
                <Paragraph>Состав:</Paragraph>
                <ul>
                  {product?.compound.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                size="large"
                className="text-white w-[75%] sm:w-[45%] bg-secondColor rounded-xl "
              >
                Добавить
              </Button>
              <div className="flex justify-end sm:items-center flex-col sm:flex-row w-[25%]  sm:w-[55%]  sm:justify-between">
                <OrderQuantity />
                <Title level={3} className="!mb-0 text-right sm:text-left">
                  689₽
                </Title>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Main;
