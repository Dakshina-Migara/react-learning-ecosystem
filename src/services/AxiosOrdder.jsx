import axios from "axios";

var token = localStorage.getItem('afsd');

const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk/api',
    headers: { 'Authorization': `Bearer ${token}` }
});

export default instance;
