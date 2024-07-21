import { ApiRequestProps } from "@/common/types";
import axios from "axios";
// import { smGetData } from "../AsyncStorage";
// import { without_login_token } from "../Common/String";

export const SM_BASE_URL = "https://jsonplaceholder.typicode.com/";

const axiosConfig = axios.create({
  baseURL: SM_BASE_URL,
});

// export const getUserInfo = async () => await smGetData("userInfo");

export const apiErrorHandling = (errData: any) => {
  const { response } = errData || {};

  return {
    isApiError: true,
    ...response.data,
    ...response.headers,
  };
};
const getHeaders = async (additionalHeaders = {}) => {
  const headers = {
    "Content-Type": "application/json",
    "cache-Control": "no-cache",
    ...additionalHeaders,
  };
  //const { token } = await getUserInfo();
  //   if (token) {
  //     headers.Authorization = `Bearer ${token}`;
  //   } else {
  //     headers.Authorization = `Bearer ${without_login_token}`;
  //   }
  return headers;
};
export const apiRequest = async (
  method: any,
  url: any,
  data?: any,
  additionalHeaders = {}
): Promise<ApiRequestProps> => {
  const headers = await getHeaders(additionalHeaders);
  try {
    const res = await axiosConfig({
      method,
      url,
      data,
      headers,
    });
    return res?.data || [];
  } catch (err) {
    const resErr = apiErrorHandling(err);
    return resErr;
  }
};
