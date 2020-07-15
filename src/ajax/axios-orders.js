import axios from "axios";

const orderInstance = axios.create({
  baseURL: "https://burger-builder-cdf0a.firebaseio.com/"
});

export default orderInstance;
