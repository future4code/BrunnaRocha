import axios, { AxiosResponse } from "axios";

const text1 = "1.txt";
const text2 = "2.txt";
const text3 = "3.txt";
const text4 = "4.txt";
const text5 = "5.txt";

const promise1:Promise<AxiosResponse> = axios.get(text1);
const promise2:Promise<AxiosResponse> = axios.get(text2);
const promise3:Promise<AxiosResponse> = axios.get(text3);
const promise4:Promise<AxiosResponse> = axios.get(text4);
const promise5:Promise<AxiosResponse> = axios.get(text5);

Promise.all([promise1, promise2, promise3, promise4, promise5]).then((values:AxiosResponse[]) => {
  console.log(values);
});
