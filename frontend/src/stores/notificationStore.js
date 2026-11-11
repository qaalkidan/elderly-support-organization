import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([]);

  const addNotification = (notification) => {
    const id = Date.now();
    notifications.value.push({
      id,
      ...notification,
      timestamp: new Date()
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id) => {
    notifications.value = notifications.value.filter(n => n.id !== id);
  };

  const success = (message) => {
    addNotification({ type: 'success', message });
  };

  const error = (message) => {
    addNotification({ type: 'error', message });
  };

  const info = (message) => {
    addNotification({ type: 'info', message });
  };

  return {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    info
  };
});
