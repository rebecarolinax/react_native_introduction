import axios from "axios";

const cep = 0;
const viaCepUrl = `https://viacep.com.br/ws/${cep}/json/`
const api = axios.create({
    baseURL: viaCepUrl
})

export default api;