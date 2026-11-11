import api from './api';

export const donationService = {
  create: async (donationData) => {
    const response = await api.post('/donations', donationData);
    return response.data;
  },

  getAll: async (params) => {
    const response = await api.get('/donations', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/donations/${id}`);
    return response.data;
  },

  getStats: async () => {
    const response = await api.get('/donations/stats');
    return response.data;
  }
};
