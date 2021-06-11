import axios from 'axios';

export default axios.create({
    baseURL: "https://ssr-spring-boot-rest.herokuapp.com/api"
})