import apiClient from "@/lib/axios";

export default {
    obtenerClientes() {
        return apiClient.get('/clientes');
    },
    agregarCliente(data) {
        return apiClient.post('/clientes', data);
    },
    obtenerCliente(id) {
        return apiClient.get(`/clientes/${id}`);
    },
    editarCliente(id, data) {
        return apiClient.put(`/clientes/${id}`, data);
    },
    cambiarEstadoCliente(id, data) {    
        return apiClient.patch(`/clientes/${id}`, data);
    },
    eliminarCliente(id) {
        return apiClient.delete(`/clientes/` + id);
    }
}