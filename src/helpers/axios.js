import axios from "axios";

const instance = axios.create({
  baseURL: "https://picsum.photos/v2/list",
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
