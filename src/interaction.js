import axios from 'axios'

export const IP = 'https://qgstudio.org:9999';  

export const myAxios = axios.create({
	baseURL: IP
})
