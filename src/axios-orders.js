import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-9e63c.firebaseio.com/",
});

export default instance;
