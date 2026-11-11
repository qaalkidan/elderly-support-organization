import api from './api';

export const assistanceService = {
  getAll: async (params) => {
    const response = await api.get('/assistance', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/assistance/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/assistance', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/assistance/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/assistance/${id}`);
    return response.data;
  }
};
