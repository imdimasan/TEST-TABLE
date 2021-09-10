import { Text, Table, Card, Input, Pagination } from "components";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.scss";

function HomePage() {
  const URL =
    "http://www.filltext.com/?rows=100&id={number|100}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32";

  //MAIN STATES
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [fullInfo, setFullInfo] = useState({});
  const [sortDirection, setSortDirection] = useState(false);
  const [findByName, setFindByName] = useState("");

  // ADD FILTERS TO DATA
  const getFiltredData = () => {
    return data.filter((el) => {
      return el["firstName"].toLowerCase().includes(findByName.toLowerCase());
    });
  };

  const changeHandler = (event) => {
    setFindByName(event.target.value);
  };

  const filteredData = getFiltredData();

  //PAGINATION
  const lastDataIndex = currentPage * pageSize;
  const firstDataIndex = lastDataIndex - pageSize;
  const currentPageView = filteredData.slice(firstDataIndex, lastDataIndex);
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginateNext = () => {
    if (currentPage === totalPages) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const paginatePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      return;
    }
  };

  // GET QUERY
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await axios
        .get(URL)
        .then(function (response) {
          setData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    };
    getData();
  }, []);

  // SHOW FULL INFORMATION
  const showFullInfo = (data) => {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        setFullInfo((fullInfo) => {
          return {
            ...fullInfo,
            [key]: data[key],
          };
        });
      }
    }
  };

  // SORTING
  const sortData = (event) => {
    const sortBy = event.target.id;
    const activeTab = event.target.classList.contains("active");

    document.querySelectorAll("TH").forEach((element) => {
      element.classList.remove("active");
    });

    const ascending = () => {
      if (sortBy === "id") {
        return setData(data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1)));
      } else if (sortBy === "adress.state") {
        return setData(
          data.sort((a, b) => (a.adress.state > b.adress.state ? 1 : -1))
        );
      } else {
        return setData(
          data.sort((a, b) =>
            a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
          )
        );
      }
    };

    const descending = () => {
      if (sortBy === "id") {
        return setData(data.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1)));
      } else if (sortBy === "adress.state") {
        return setData(
          data.sort((a, b) => (a.adress.state > b.adress.state ? -1 : 1))
        );
      } else {
        return setData(
          data.sort((a, b) =>
            a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? -1 : 1
          )
        );
      }
    };

    if (!sortDirection && !activeTab) {
      event.target.classList.add("active");
      ascending();
      setSortDirection(true);
    } else if (sortDirection && !activeTab) {
      event.target.classList.add("active");
      ascending();
      setSortDirection(false);
    } else {
      event.target.classList.remove("active");
      descending();
      setSortDirection(null);
    }
  };

  // RENDER

  return (
    <div className="wrapper">
      <Text variant="h1" className="page__title">
        MY CLIENT LIST
      </Text>

      {loading ? (
        <Input disabled={true} placeholder="Search by name ..."></Input>
      ) : (
        <Input
          placeholder="Search by name ..."
          onChange={changeHandler}
          value={findByName}
          type="text"
        ></Input>
      )}

      {loading ? (
        <Table pageSize={pageSize} loading={loading}></Table>
      ) : (
        <Table
          data={currentPageView}
          pageSize={pageSize}
          loading={loading}
          onClick={showFullInfo}
          sortData={sortData}
        ></Table>
      )}

      <Pagination
        totalPages={totalPages}
        paginate={paginate}
        prevBtn={paginatePrev}
        nextBtn={paginateNext}
        currentPage={currentPage}
      ></Pagination>
      <Card data={fullInfo}></Card>
    </div>
  );
}

export default HomePage;
