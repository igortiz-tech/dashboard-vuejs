import {http} from './apiResource'

export default {

    async index(filtros){
        try{
            const response = await http.get('restaurantes', {params: filtros});
            return response.data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },

    async store(restaurante){
        try{
            const response = await http.post('restaurantes', restaurante);
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error
        }
    },

    async show(id){
        try{
            const response = await http.get(`restaurantes/${id}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error
        }
    },

    async update(id, restaurante){
        try{
            const response = await http.put(`restaurantes/${id}`, restaurante);
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    },

    async remove(id){
        try{
            const response = await http.delete(`restaurantes/${id}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    },

}

