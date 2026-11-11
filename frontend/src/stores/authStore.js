import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);
  const token = ref(null);

  const login = async (credentials) => {
    // Implement login logic
    console.log('Login:', credentials);
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    token.value = null;
  };

  const checkAuth = () => {
    // Check if user is authenticated
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      token.value = storedToken;
      isAuthenticated.value = true;
    }
  };

  return {
    user,
    isAuthenticated,
    token,
    login,
    logout,
    checkAuth
  };
});
