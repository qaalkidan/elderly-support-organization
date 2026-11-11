<template>
  <footer class="app-footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- About Section -->
          <div class="footer-col">
            <div class="footer-logo">
              <img src="/logo.svg" alt="Logo" />
              <div class="logo-text">
                <div>አረጋውያን መርጃ ድርጅት</div>
                <div class="logo-subtitle">Elderly Support Organization</div>
              </div>
            </div>
            <p class="footer-description">
              {{ t('footer.tagline') }}
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-col">
            <h3 class="footer-title">{{ t('footer.quickLinks') }}</h3>
            <ul class="footer-links">
              <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
              <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
              <li><router-link to="/services">{{ t('nav.services') }}</router-link></li>
              <li><router-link to="/news-events">{{ t('nav.newsEvents') }}</router-link></li>
            </ul>
          </div>
          
          <!-- Get Involved -->
          <div class="footer-col">
            <h3 class="footer-title">{{ t('footer.getInvolved') }}</h3>
            <ul class="footer-links">
              <li><router-link to="/donate">{{ t('footer.donate') }}</router-link></li>
              <li><router-link to="/get-involved">{{ t('footer.volunteer') }}</router-link></li>
              <li><router-link to="/get-involved/partner">{{ t('footer.partner') }}</router-link></li>
              <li><router-link to="/gallery">{{ t('footer.gallery') }}</router-link></li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div class="footer-col">
            <h3 class="footer-title">{{ t('footer.contactUs') }}</h3>
            <div class="contact-info">
              <div class="contact-item">
                <span class="icon">📍</span>
                <span>{{ t('common.location') }}</span>
              </div>
              <div class="contact-item">
                <span class="icon">📞</span>
                <span>{{ t('common.phone') }}</span>
              </div>
              <div class="contact-item">
                <span class="icon">✉️</span>
                <span>{{ t('common.email') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; 2024 {{ t('footer.copyright') }}</p>
          <div class="footer-bottom-links">
            <a href="#">{{ t('footer.privacy') }}</a>
            <span class="separator">|</span>
            <a href="#">{{ t('footer.terms') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '../../composables/useLanguage';

const { t } = useLanguage();
</script>

<style scoped>
.app-footer {
  background-color: var(--primary-green);
  color: var(--white);
}

.footer-main {
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.footer-logo img {
  width: 50px;
  height: 50px;
}

.logo-text {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
}

.logo-subtitle {
  font-size: 0.8rem;
  opacity: 0.8;
  font-weight: 400;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--gold);
  transform: translateY(-3px);
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: var(--white);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--white);
  opacity: 0.85;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  opacity: 1;
  color: var(--gold);
  padding-left: 5px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.contact-item .icon {
  font-size: 1.1rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  opacity: 0.8;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-bottom-links a {
  color: var(--white);
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: var(--gold);
}

.separator {
  opacity: 0.5;
}

@media (max-width: 991px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 3rem 0 1.5rem;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
