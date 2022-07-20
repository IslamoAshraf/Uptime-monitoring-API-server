import { _axios } from "../configurations/axiosConfig.js";

const isAvailable = async (url) => {
  try {
    const response = await _axios.get(url);
    const responseTime = response.headers["request-duration"];

    let isOnline = response.status >= 100 && response.status <= 399;
    return { responseTime, isOnline };
  } catch (error) {
    return false;
  }
};
export { isAvailable };
