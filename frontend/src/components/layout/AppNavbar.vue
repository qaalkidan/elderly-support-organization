<template>
  <nav class="app-navbar">
    <div class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
      <router-link to="/" @click="closeMobileMenu" class="nav-link">{{ t('nav.home') }}</router-link>
      <router-link to="/about" @click="closeMobileMenu" class="nav-link">{{ t('nav.about') }}</router-link>

      <div class="nav-dropdown" @mouseenter="openDropdown('services')" @mouseleave="closeDropdown">
        <router-link to="/services" class="nav-link" :class="{ 'is-active': route.path.startsWith('/services') }">
          {{ t('nav.services') }}
          <svg class="dropdown-chevron" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </router-link>
        <div class="dropdown-menu" v-show="activeDropdown === 'services'">
          <router-link to="/services/healthcare" @click="closeMobileMenu">{{ t('nav.serviceHealthcare') }}</router-link>
          <router-link to="/services/food" @click="closeMobileMenu">{{ t('nav.serviceFood') }}</router-link>
          <router-link to="/services/financial" @click="closeMobileMenu">{{ t('nav.serviceFinancial') }}</router-link>
          <router-link to="/services/social" @click="closeMobileMenu">{{ t('nav.serviceSocial') }}</router-link>
          <router-link to="/services/home-visits" @click="closeMobileMenu">{{ t('nav.serviceHomeVisits') }}</router-link>
          <router-link to="/services/other" @click="closeMobileMenu">{{ t('nav.serviceOther') }}</router-link>
        </div>
      </div>

      <router-link to="/news-events" @click="closeMobileMenu" class="nav-link">{{ t('nav.newsEvents') }}</router-link>
      <router-link to="/gallery" @click="closeMobileMenu" class="nav-link">{{ t('nav.gallery') }}</router-link>

      <div class="nav-dropdown" @mouseenter="openDropdown('involved')" @mouseleave="closeDropdown">
        <router-link to="/get-involved" class="nav-link" :class="{ 'is-active': route.path.startsWith('/get-involved') }">
          {{ t('nav.getInvolved') }}
          <svg class="dropdown-chevron" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </router-link>
        <div class="dropdown-menu" v-show="activeDropdown === 'involved'">
          <router-link to="/get-involved/volunteer" @click="closeMobileMenu">{{ t('nav.volunteer') }}</router-link>
          <router-link to="/donate" @click="closeMobileMenu">{{ t('nav.donate') }}</router-link>
          <router-link to="/get-involved/partner" @click="closeMobileMenu">{{ t('nav.partner') }}</router-link>
        </div>
      </div>

      <router-link to="/contact" @click="closeMobileMenu" class="nav-link">{{ t('nav.contact') }}</router-link>

      <router-link to="/donate" @click="closeMobileMenu" class="donate-btn">
        <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {{ t('nav.donateNow') }}
      </router-link>
    </div>

    <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '../../composables/useLanguage';

const { t } = useLanguage();
const route = useRoute();
const mobileMenuOpen = ref(false);
const activeDropdown = ref(null);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const openDropdown = (name) => {
  activeDropdown.value = name;
};

const closeDropdown = () => {
  activeDropdown.value = null;
};
</script>

<style scoped>
.app-navbar {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1.35rem;
  align-items: center;
}

.nav-link {
  color: #1e293b;
  font-weight: 500;
  font-size: 0.84rem;
  position: relative;
  padding: 0.35rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--primary-green);
}

.nav-link.router-link-exact-active,
.nav-link.is-active {
  color: var(--primary-green);
  font-weight: 700;
}

.nav-link.router-link-exact-active::after,
.nav-link.is-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--gold);
  border-radius: 2px;
}

.nav-dropdown {
  position: relative;
}

.dropdown-chevron {
  width: 14px;
  height: 14px;
  opacity: 0.75;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--white);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 0.45rem 0;
  min-width: 195px;
  z-index: 100;
  margin-top: 0.35rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.dropdown-menu a {
  display: block;
  padding: 0.55rem 1rem;
  color: var(--dark-text);
  font-size: 0.82rem;
  transition: all 0.2s ease;
}

.dropdown-menu a:hover {
  background-color: var(--cream);
  color: var(--primary-green);
}

.donate-btn {
  background-color: var(--gold);
  color: #1a2e22;
  padding: 0.5rem 1.15rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(214, 168, 95, 0.3);
  transition: all 0.25s ease;
}

.donate-btn:hover {
  background-color: #c89748;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(214, 168, 95, 0.4);
}

.heart-icon {
  width: 14px;
  height: 14px;
  color: #1a2e22;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2.5px;
  background-color: var(--dark-green);
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 1080px) {
  .nav-links {
    gap: 0.9rem;
  }
}

@media (max-width: 991px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 104px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 104px);
    background-color: var(--white);
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 2rem;
    gap: 1rem;
    transition: left 0.3s ease;
    overflow-y: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .nav-links.mobile-open {
    left: 0;
  }

  .nav-link {
    width: 100%;
    padding: 0.65rem 0;
    border-bottom: 1px solid var(--cream);
  }

  .nav-dropdown {
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    margin-top: 0.4rem;
    margin-left: 1rem;
    background-color: var(--cream);
  }

  .donate-btn {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
  }
}
</style>
