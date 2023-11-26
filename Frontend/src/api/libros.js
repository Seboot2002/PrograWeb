import axios from 'axios';
import Base from './base'

const endpoint = '/libro';

const create = async (request) => await axios.post('http://localhost:3080/libro', request);

const findAll = async() => await Base.get(endpoint);

const findOne = async(id) => {
    const newEndpoint = endpoint.concat('/',id); 

    return await Base.get(newEndpoint);
}

const update = async(request) => await Base.put(endpoint,request);

const remove = async(id) => {
    const newEndpoint = endpoint.concat('/',id);

    return await Base.remove(newEndpoint);
}

const citasApi = { create, findAll, findOne, update, remove }

export default citasApi;