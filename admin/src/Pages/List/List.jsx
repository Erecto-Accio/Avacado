import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/food/listFoods"
    );
    console.log(list);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <h1>All food list</h1>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`http://localhost:3000/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category.toUpperCase()}</p>
              <p>${item.price}</p>
              <p>X</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
