import api from './api';

export const volunteerService = {
  register: async (volunteerData) => {
    const response = await api.post('/volunteers', volunteerData);
    return response.data;
  },

  getAll: async (params) => {
    const response = await api.get('/volunteers', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/volunteers/${id}`);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/volunteers/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/volunteers/${id}`);
    return response.data;
  }
};
