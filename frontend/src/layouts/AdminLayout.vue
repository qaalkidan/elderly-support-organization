<template>
  <div class="admin-layout">
    <AppSidebar>
      <nav class="admin-nav">
        <router-link to="/admin">Dashboard</router-link>
        <router-link to="/admin/users">Users</router-link>
        <router-link to="/admin/services">Services</router-link>
        <router-link to="/admin/news">News</router-link>
        <router-link to="/admin/events">Events</router-link>
      </nav>
    </AppSidebar>
    <div class="admin-main">
      <AppHeader />
      <main class="admin-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue';
import AppSidebar from '../components/layout/AppSidebar.vue';
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
}

.admin-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.admin-content {
  flex: 1;
  padding: 2rem;
}

.admin-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.admin-nav a {
  padding: 0.75rem;
  text-decoration: none;
  color: var(--text-color);
  border-radius: 4px;
  transition: background-color 0.3s;
}

.admin-nav a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
