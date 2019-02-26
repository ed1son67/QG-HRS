import axios from 'axios'

export const IP = 'http://www.flyingstars.cn:1205';  

export const myAxios = axios.create({
	baseURL: IP
})
