import axios from "axios";
import { BASE_URL } from "../Apis/Api";

function useAxiosAuthInstance() {

    const  axiosAuthInstance = axios.create({
        // baseURL: process.env.REACT_APP_BACKEND_URL + 'api/public/employeeAuth/',
        baseURL: BASE_URL,
    })

    return axiosAuthInstance;
}

export default useAxiosAuthInstance;