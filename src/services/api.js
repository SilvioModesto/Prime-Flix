import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=e8106591489b575bff986d284d518692

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;