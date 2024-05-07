import React, { useEffect, useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar.tsx";
// import Search from "./components/Search.tsx";
import axios from "axios";
// import Bike from "./components/Bike.tsx";
// import { LIMIT_PER_PAGE } from "./constant/constant.js";
// import BikeNubmer from "./components/BikeNubmer.tsx";
// import SkeletonComp from "./components/SkeletonComp.tsx";
import { useSearchParams } from "react-router-dom";
// import ErrorComp from "./components/ErrorComp.tsx";
// import EmptyComp from "./components/EmptyComp.tsx";
// import Footer from "./components/Footer.tsx";
// import PaginationComp from "./components/PaginationComp.tsx";
import Navbar from "../components/Navbar.tsx";
import Bike from "../sections/home/Bike.tsx";
import BikeNubmer from "../sections/home/BikeNubmer.tsx";
import { LIMIT_PER_PAGE } from "../constant/constant.js";
import Search from "../sections/home/Search.tsx";
import SkeletonComp from "../components/SkeletonComp.tsx";
import ErrorComp from "../components/ErrorComp.tsx";
import EmptyComp from "../components/EmptyComp.tsx";
import PaginationComp from "../sections/home/PaginationComp.tsx";
import Footer from "../components/Footer.tsx";

interface ErrorNumber {
  firstText: string;
  secondText: string;
}

interface ErrorData {
  firstText: string;
  secondText: string;
}

const Home: React.FC = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page");
  const initialPage = pageParam ? parseInt(pageParam) : 1;

  const [loading, setLoading] = useState(false);
  const [NumberLoading, setNumberLoading] = useState(false);

  const [errorData, setErrorData] = useState<ErrorData | null>(null);
  const [errorNumber, setErrorNumber] = useState<ErrorNumber | null>(null);

  const [isEmpty, setIsEmpty] = useState(false);

  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const totalPages = Math.ceil(number / LIMIT_PER_PAGE);

  let currentPage = initialPage;

  const [search, setSearch] = useState(searchParams.get("query") || "");

  const handleFetchNumber = () => {
    setNumberLoading(true);
    setErrorNumber(null);
    axios
      .get("/v3/search/count", {
        params: {
          query: search,
        },
      })
      .then((res) => {
        setNumber(res.data.stolen);
        setNumberLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setNumberLoading(false);
        setErrorNumber({
          firstText: "Faild to fetch number, ",
          secondText: "please try again",
        });
      });
  };

  const handleFetchData = () => {
    setLoading(true);
    setIsEmpty(false);
    setErrorData(null);
    axios
      .get("/v3/search", {
        params: {
          per_page: LIMIT_PER_PAGE,
          page: currentPage,
          query: search,
        },
      })
      .then((res) => {
        setData(res.data.bikes);
        setLoading(false);
        if (res.data.bikes.length === 0) {
          setIsEmpty(true);
          setNumber(0);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorData({
          firstText: "Something went wrong,",
          secondText: "please try again",
        });
      });
  };

  const handleSearch = () => {
    setSearchParams(`page=1&query=${encodeURIComponent(search)}`);
    currentPage = 1;
    handleFetchNumber();

    handleFetchData();
  };

  useEffect(() => {
    handleFetchData();
  }, [currentPage]);

  useEffect(() => {
    handleFetchNumber();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    currentPage = value;
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      params.set("page", value.toString());
      return params.toString();
    });
  };

  return (
    <div>
      <Navbar />
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <BikeNubmer
        number={number}
        loading={NumberLoading}
        error={errorNumber}
        handleFetchNumber={handleFetchNumber}
      />
      {loading ? (
        <SkeletonComp />
      ) : errorData ? (
        <ErrorComp error={errorData} handleClick={handleSearch} />
      ) : isEmpty ? (
        <EmptyComp />
      ) : (
        <Bike data={data} />
      )}
      <PaginationComp
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default Home;
