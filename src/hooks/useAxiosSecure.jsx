import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthInfo from "./useAuthInfo";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
    const { signOutUser } = useAuthInfo()
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.request.use(request => {
            const token = localStorage.getItem('access-token')
            if (token) {
                request.headers.authorization = `Bearer ${token}`
            }
            return request
        })

        axiosSecure.interceptors.response.use(response => {
            return response
        }, (error) => {
            if (error.response && error.response?.status === 401 || error.response?.status === 403) {
                signOutUser()
                navigate('/', { replace: true })
            }
            return Promise.reject(error)
        })
    }, [signOutUser, navigate])

    return [axiosSecure]
};

export default useAxiosSecure;