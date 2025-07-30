import apiClient from "@/lib/axios";

export default {
    obtenerClientes() {
        return apiClient.get('/clientes');
    },
    agregarCliente(data) {
        return apiClient.post('/clientes', data);
    }
}