import axios,{AxiosResponse} from 'axios';
import IPelicula from '../app/modules/IPelicula';

axios.defaults.baseURL = 'http://localhost:5000/api/'

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    put: (url: string,body:{}) => axios.put(url,body).then(responseBody),
    post: (url: string,body:{}) => axios.post(url,body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Peliculas = {
    list: () => request.get('peliculas'),
    update: (categoria:IPelicula) => request.put('peliculas',categoria),
    create: (categoria:IPelicula) => request.post('peliculas',categoria),
    eliminar: (id: number) => request.delete('peliculas/'+id)
}


export default{
    Peliculas
}