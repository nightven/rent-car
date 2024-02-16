import React, { useEffect, useState } from "react";
import InputPanel from "../components/InputPanel/InputPanel";
import CardList from "../components/CardList/CardList";
import Button from "../components/Common/Buttons/Button";
import { useGetCarsQuery } from "../redux/advert/advertSlice";
import Loader from "../components/Loader/Loader";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("cars")) ?? []
  );

  const { data: responseData, isLoading } = useGetCarsQuery(page);

  useEffect(() => {
    if (responseData) {
      setData((prevData) => [...prevData, ...responseData]);
    }
  }, [responseData]);

  const handleButtonClick = () => {
    setPage((prev) => (prev += 1));
  };

  return (
    <div className="container">
      <InputPanel />
      {isLoading ? (
        <Loader />
      ) : (
        <CardList data={data} favorite={favorite} setFavorite={setFavorite} />
      )}

      <Button
        text={"Load more"}
        width={"100px"}
        height={"44px"}
        background={"white"}
        color={"var(--active-blue)"}
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default Catalog;
