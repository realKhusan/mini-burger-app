import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { updateCategories } from "../../store/slices/Categories";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "antd";
import mainApi from "../../api/Request";

function Navbar() {
  const categories = useSelector((state: RootState) => state.categories.data);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await mainApi.get("/category");
        if (res.status === 200) {
          dispatch(updateCategories(res.data));
        }
      } catch (e) {
        console.error("Error fetching categories:", e);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="container flex justify-between h-full gap-3 px-2 py-5 mx-auto overflow-x-auto">
      {categories.map((item, index) => {
        return (
          <NavLink key={index} to={`category/${item.slug}`}>
            <Button
              shape="round"
              className={`shadow  ${
                location.pathname.includes(`category/${item.slug}`)
                  ? "!bg-mainColor text-white"
                  : ""
              }`}
            >
              {item.slug}
            </Button>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navbar;
