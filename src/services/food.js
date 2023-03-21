import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = async () => {
    const req = await axios.get(`${baseUrl}/meals`)
    return req.data
}

const create = async (newObj) => {
    const res = await axios
        .post(`${baseUrl}/order`, newObj)
    return res
}

export default {getAll, create}