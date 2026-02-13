import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://localhost:3000/api",
    withCredentials: true // by adding this field browser will send the cookies to server automatically on every req
})

export default axiosInstance