import axios from "axios";

export const getData = async ({ setData, setLoading, URL }) => {
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
