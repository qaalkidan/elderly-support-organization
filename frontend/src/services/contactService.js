import api from './api';

export const contactService = {
  sendMessage: async (messageData) => {
    const response = await api.post('/contact', messageData);
    return response.data;
  },

  getAll: async (params) => {
    const response = await api.get('/contact', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/contact/${id}`);
    return response.data;
  },

  markAsRead: async (id) => {
    const response = await api.patch(`/contact/${id}/read`);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  }
};
