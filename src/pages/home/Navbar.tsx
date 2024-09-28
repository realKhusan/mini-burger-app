import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "../../components/categoryButton";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { updateCategories } from "../../store/slices/Categories";

function Navbar() {
  const categories = useSelector((state: RootState) => state.categories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://d54757447b9c0307.mokky.dev/category"
        );
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
        return <CategoryButton key={index} img={""} title={item.title} />;
      })}
    </div>
  );
}

export default Navbar;
