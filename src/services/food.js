import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = async () => {
    const req = await axios.get(`${baseUrl}/meals`)
    return req.data
}

const create = async (newObj) => {
    const req = await axios.post(`${baseUrl}/orders`, newObj)
    return req.data
}

export default {getAll, create}