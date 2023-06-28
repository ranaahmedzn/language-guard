import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthInfo from "./useAuthInfo";

const axiosSecure = axios.create({
    baseURL: "https://language-guard-server.vercel.app"
})

const useAxiosSecure = () => {
    const { signOutUser } = useAuthInfo()
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.request.use((request) => {
            const token = localStorage.getItem('access-token');
            // console.log(token)

            if (token) {
                request.headers.authorization = `Bearer ${token}`
            }
            return request
        })

        axiosSecure.interceptors.response.use(response => {
            return response
        }, async (error) => {
            if (error.response && error.response?.status === 401 || error.response?.status === 403) {
                await signOutUser()
                navigate('/', { replace: true })
            }
            return Promise.reject(error)
        })
    }, [signOutUser, navigate])

    return [axiosSecure]
};

export default useAxiosSecure;