import React, { useEffect, useState } from "react";
import InputPanel from "../components/InputPanel/InputPanel";
import CardList from "../components/CardList/CardList";
import Button from "../components/Common/Buttons/Button";
import { useGetCarsQuery } from "../redux/advert/advertSlice";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/Common/NotFound/NotFound";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("cars")) ?? []
  );

  const {
    data: responseData,
    isLoading,
    isError,
  } = useGetCarsQuery(
    {
      page: page,
      limit: 12,
      make: query.make,
      rentalPrice: query.price,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  console.log(isLoading);

  useEffect(() => {
    if (responseData) {
      if (query.make || query.price) {
        setData([]);
        setData(responseData);
      } else {
        setData((prevData) => [...prevData, ...responseData]);
      }
    }
  }, [responseData]);

  useEffect(() => {
    if (!query.make || !query.price) {
      setData([]);
    }
  }, [query.make, query.price]);

  const handleButtonClick = () => {
    setPage((prev) => (prev += 1));
  };

  return (
    <div className="container">
      <InputPanel setQuery={setQuery} />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <NotFound />
      ) : (
        <CardList data={data} favorite={favorite} setFavorite={setFavorite} />
      )}
      {!isError && (
        <Button
          text={"Load more"}
          width={"100px"}
          height={"44px"}
          background={"white"}
          color={"var(--active-blue)"}
          onClick={handleButtonClick}
        />
      )}
    </div>
  );
};

export default Catalog;
