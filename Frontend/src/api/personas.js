import Base from './base'
import axios from 'axios';

const endpoint = '/personas';

const create = async (request) => await Base.post(endpoint,request);

const findAll = async() => await Base.get(endpoint);

const findLogin = async(data) => await axios({
    method: 'post',
    url: 'http://localhost:3080/personas/login',
    headers: {}, 
    data: {
      nombre: data.nombre,
      password: data.password
    }
  });

const findOne = async(id) => {
    const newEndpoint = endpoint.concat('/',id); 

    return await Base.get(newEndpoint);
}

const update = async(id, data) => await axios({
  method: 'put',
  url: 'http://localhost:3080/personas/'+id,
  headers: {}, 
  data: data
});

const remove = async(id) => {
    const newEndpoint = endpoint.concat('/',id);

    return await Base.remove(newEndpoint);
}

const personasApi = { create, findAll, findOne, update, remove, findLogin }

export default personasApi;