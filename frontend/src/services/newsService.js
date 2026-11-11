import api from './api';

export const newsService = {
  getAll: async (params) => {
    const response = await api.get('/news', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/news/${id}`);
    return response.data;
  },

  create: async (newsData) => {
    const response = await api.post('/news', newsData);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/news/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/news/${id}`);
    return response.data;
  },

  getLatest: async (limit = 5) => {
    const response = await api.get('/news/latest', { params: { limit } });
    return response.data;
  }
};
