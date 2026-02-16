import axios from "axios";

const api = axios.create({
     baseURL:'https://api.themoviedb.org/3/',
     params:{
          api_key: 'd9918863aecdb90ed4c982ffe3cc5d14',
          language: 'pt-BR',
          page: 1
     }
})

export default api