import axios from 'axios';
import Base from './base'

const endpoint = '/reserva';

const create = async (request) => await Base.post(endpoint,request);

const findAll = async(id) => await Base.get(endpoint+'/'+id);

const findOne = async(id) => {
    const newEndpoint = endpoint.concat('/',id); 

    return await Base.get(newEndpoint);
}

const findEveryOne = async() => await axios.get('http://localhost:3080/reserva/');

const update = async(request) => await Base.put(endpoint,request);

const remove = async(id) => {
    const newEndpoint = endpoint.concat('/',id);

    return await Base.remove(newEndpoint);
}

const reservasApi = { create, findAll, findOne, update, remove, findEveryOne }

export default reservasApi;