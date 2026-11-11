import api from './api';

export const galleryService = {
  getAll: async (params) => {
    const response = await api.get('/gallery', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/gallery/${id}`);
    return response.data;
  },

  create: async (galleryData) => {
    const response = await api.post('/gallery', galleryData);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/gallery/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/gallery/${id}`);
    return response.data;
  },

  uploadImage: async (formData) => {
    const response = await api.post('/gallery/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  }
};
