import { useEffect } from "react";
import axios from "axios";
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    // console.log('global axios instance');
    try {
      const res = await axios(productsUrl);
      const resp2 = await axios(randomUserUrl);
      console.log(res.response);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
