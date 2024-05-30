import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'http://192.168.12.91:3333'
    // baseURL: 'https://projectreactnative.onrender.com'
 });

 export {api};