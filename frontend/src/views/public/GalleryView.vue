<template>
  <div class="gallery-view">
    <!-- Hero Banner -->
    <section class="gallery-hero">
      <div class="hero-background">
        <img src="/images/hero-banner.png" alt="Elderly Support Gallery" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>

      <svg class="hero-leaf" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
        <path d="M12 12 C45 18, 75 45, 95 95 C45 80, 20 50, 12 12 Z" />
        <path d="M12 12 C45 45, 70 70, 95 95" />
      </svg>
      <div class="hero-arc" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <div class="hero-overline-row">
              <span class="overline-line"></span>
              <span class="overline-text">Our Gallery</span>
              <span class="overline-line"></span>
            </div>

            <h1 class="hero-title-am">የእኛ ጋለሪ</h1>
            <div class="hero-title-en">Our Gallery</div>
            <p class="hero-subtitle">Capturing moments of care, compassion, and community.</p>

            <nav class="hero-breadcrumb" aria-label="Breadcrumb">
              <router-link to="/" class="breadcrumb-home">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3 3 10.5h2.5V20h5v-5.5h3V20h5v-9.5H21L12 3Z" />
                </svg>
                <span>Home</span>
              </router-link>
              <span class="breadcrumb-sep" aria-hidden="true">&gt;</span>
              <span class="breadcrumb-current">Gallery</span>
            </nav>
          </div>
        </div>
      </div>

      <svg class="hero-wave" viewBox="0 0 1440 44" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,12 Q360,44 720,22 T1440,12 L1440,44 L0,44 Z" fill="#F7F4EB" />
      </svg>
    </section>

    <!-- Main Body -->
    <div class="gallery-body">
      <section class="gallery-catalog">
        <div class="container">
          <!-- Filter Pills & Search Bar -->
          <div class="gallery-toolbar">
            <div class="filter-pills" role="tablist" aria-label="Gallery categories">
              <button
                v-for="cat in categories"
                :key="cat.key"
                type="button"
                role="tab"
                :aria-selected="activeCategory === cat.key"
                :class="['filter-pill', { active: activeCategory === cat.key }]"
                @click="activeCategory = cat.key"
              >
                <svg v-if="cat.key === 'all'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                <svg v-else-if="cat.key === 'Activities'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="7.5" r="2.8" />
                  <circle cx="6" cy="9.5" r="2.2" />
                  <circle cx="18" cy="9.5" r="2.2" />
                  <path d="M7.5 19v-2c0-2 2-3.6 4.5-3.6s4.5 1.6 4.5 3.6v2h-9Zm-5 0v-1.5c0-1.5 1.3-2.7 3-2.7.55 0 1.05.13 1.5.36-.55.75-.9 1.67-.9 2.64V19H2.5Zm16 0v-1.2c0-.97-.35-1.89-.9-2.64.45-.23.95-.36 1.5-.36 1.7 0 3 1.2 3 2.7V19h-3.6Z" />
                </svg>
                <svg v-else-if="cat.key === 'Events'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <svg v-else-if="cat.key === 'Community Support'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
                <svg v-else-if="cat.key === 'Donations'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <span>{{ cat.label }}</span>
              </button>
            </div>

            <div class="search-box">
              <input
                v-model.trim="searchQuery"
                type="search"
                placeholder="Search in gallery..."
                aria-label="Search in gallery"
              />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          <!-- 5x2 Gallery Grid -->
          <div v-if="filteredItems.length" class="gallery-grid">
            <button
              v-for="item in filteredItems"
              :key="item.id"
              type="button"
              class="gallery-tile"
              @click="openLightbox(item)"
            >
              <img
                :src="item.image"
                :alt="item.title"
                :style="{
                  objectPosition: item.position || 'center center',
                  '--tile-scale': item.zoom || 1,
                  '--tile-origin': item.origin || 'center center'
                }"
              />
              <div class="tile-overlay">
                <span class="tile-category">{{ item.category }}</span>
                <span class="tile-title">{{ item.title }}</span>
              </div>
            </button>
          </div>
          <div v-else class="gallery-empty">
            No photos match your filter.
            <button type="button" class="reset-btn" @click="resetFilters">Show All Photos</button>
          </div>
        </div>
      </section>

      <!-- Bottom CTA Banner -->
      <section class="gallery-cta-section">
        <div class="container">
          <div class="cta-banner">
            <svg class="cta-leaf cta-leaf-left" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M10 110 C25 70, 50 40, 100 20 C80 65, 55 95, 10 110 Z" />
              <path d="M10 110 C45 75, 70 50, 100 20" />
            </svg>
            <svg class="cta-leaf cta-leaf-right" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
              <path d="M110 10 C85 45, 55 75, 10 95 C30 50, 65 25, 110 10 Z" />
              <path d="M110 10 C75 45, 45 70, 10 95" />
            </svg>

            <div class="cta-content">
              <div class="cta-left">
                <div class="cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                    <path d="m18 15-2-2" />
                    <path d="m15 18-2-2" />
                  </svg>
                </div>
                <div>
                  <h2 class="cta-title">Let's Support Our Elderly Community</h2>
                  <p class="cta-subtitle">Together, we can make a difference in their lives.</p>
                </div>
              </div>

              <router-link to="/donate" class="btn-donate">
                <span>Donate Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="selectedItem" class="lightbox-backdrop" @click.self="closeLightbox" role="dialog" aria-modal="true" :aria-label="selectedItem.title">
      <div class="lightbox-card">
        <button type="button" class="lightbox-close" @click="closeLightbox" aria-label="Close photo preview">&times;</button>
        <img :src="selectedItem.image" :alt="selectedItem.title" />
        <div class="lightbox-caption">
          <div>
            <span class="lightbox-tag">{{ selectedItem.category }}</span>
            <h3>{{ selectedItem.title }}</h3>
          </div>
          <div class="lightbox-nav">
            <button type="button" @click="stepLightbox(-1)" aria-label="Previous photo">&larr;</button>
            <button type="button" @click="stepLightbox(1)" aria-label="Next photo">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const activeCategory = ref('all');
const searchQuery = ref('');
const selectedItem = ref(null);

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'Activities', label: 'Activities' },
  { key: 'Events', label: 'Events' },
  { key: 'Community Support', label: 'Community Support' },
  { key: 'Donations', label: 'Donations' },
  { key: 'Volunteers', label: 'Volunteers' }
];

const galleryItems = [
  {
    id: 1,
    title: 'Smiling Elder in Community',
    category: 'Community Support',
    image: '/images/home-about-elderly-woman.png',
    position: 'center 25%'
  },
  {
    id: 2,
    title: 'Volunteers Delivering Food Parcels',
    category: 'Donations',
    image: '/images/service-food.jpg',
    position: 'center 20%'
  },
  {
    id: 3,
    title: 'Annual Elders Community Gathering',
    category: 'Events',
    image: '/images/home-events-community.png',
    position: 'center 42%'
  },
  {
    id: 4,
    title: 'Compassionate Care & Companionship',
    category: 'Activities',
    image: '/images/service-social.jpg',
    position: 'center 30%'
  },
  {
    id: 5,
    title: 'Volunteer Outreach Team',
    category: 'Volunteers',
    image: '/images/about-caregiver.jpg',
    position: 'center 20%'
  },
  {
    id: 6,
    title: 'Home Visit & Personal Care',
    category: 'Volunteers',
    image: '/images/service-home-visits.jpg',
    position: 'center 20%'
  },
  {
    id: 7,
    title: 'Dignified Living Together',
    category: 'Community Support',
    image: '/images/hero-banner.png',
    position: '72% 20%'
  },
  {
    id: 8,
    title: 'Community Medical Checkup',
    category: 'Activities',
    image: '/images/service-healthcare.jpg',
    position: 'center 25%'
  },
  {
    id: 9,
    title: 'Elder Support & Assistance',
    category: 'Donations',
    image: '/images/service-financial.jpg',
    position: 'center 20%'
  },
  {
    id: 10,
    title: 'Elderly Day Celebration',
    category: 'Events',
    image: '/images/home-events-community.png',
    position: '72% 40%',
    zoom: 1.48,
    origin: '72% 42%'
  }
];

const filteredItems = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return galleryItems.filter((item) => {
    const matchesCategory = activeCategory.value === 'all' || item.category === activeCategory.value;
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
});

const resetFilters = () => {
  activeCategory.value = 'all';
  searchQuery.value = '';
};

const openLightbox = (item) => {
  selectedItem.value = item;
};

const closeLightbox = () => {
  selectedItem.value = null;
};

const stepLightbox = (delta) => {
  if (!selectedItem.value || !filteredItems.value.length) return;
  const idx = filteredItems.value.findIndex((i) => i.id === selectedItem.value.id);
  const next = (idx + delta + filteredItems.value.length) % filteredItems.value.length;
  selectedItem.value = filteredItems.value[next];
};

const handleKeydown = (e) => {
  if (!selectedItem.value) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') stepLightbox(1);
  else if (e.key === 'ArrowLeft') stepLightbox(-1);
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));
</script>

<style scoped>
.gallery-view {
  width: 100%;
  background-color: #f7f4eb;
}

/* Hero Banner */
.gallery-hero {
  position: relative;
  height: 270px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right 10%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(21, 56, 40, 0.96) 0%,
    rgba(21, 56, 40, 0.9) 35%,
    rgba(21, 56, 40, 0.42) 55%,
    rgba(21, 56, 40, 0.05) 76%,
    transparent 100%
  );
}

.hero-leaf {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 110px;
  height: 110px;
  color: rgba(255, 255, 255, 0.08);
  pointer-events: none;
  z-index: 1;
}

.hero-arc {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 1px solid rgba(214, 168, 95, 0.28);
  top: -28px;
  left: 38%;
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 18px;
}

.hero-content .container {
  width: 100%;
}

.hero-text {
  max-width: 540px;
}

.hero-overline-row {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.35rem;
}

.overline-line {
  width: 34px;
  height: 1.5px;
  background-color: var(--gold);
}

.overline-text {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e4ba67;
}

.hero-title-am {
  font-size: clamp(1.75rem, 2.8vw, 2.35rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.15;
}

.hero-title-en {
  font-size: clamp(1.35rem, 2.1vw, 1.85rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.18;
  margin-bottom: 0.35rem;
}

.hero-subtitle {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.9rem;
}

.hero-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: rgba(214, 198, 162, 0.9);
  color: #1a2e22;
  padding: 0.32rem 0.95rem;
  border-radius: 50px;
  font-size: 0.76rem;
  font-weight: 600;
}

.breadcrumb-home {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #1a2e22;
}

.breadcrumb-home:hover {
  text-decoration: underline;
}

.breadcrumb-home svg {
  width: 13px;
  height: 13px;
}

.breadcrumb-sep {
  opacity: 0.65;
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 30px;
  z-index: 3;
  pointer-events: none;
}

/* Main Body */
.gallery-body {
  background-color: #f7f4eb;
  background-image: radial-gradient(rgba(214, 168, 95, 0.08) 1px, transparent 1px);
  background-size: 28px 28px;
}

.gallery-catalog {
  padding: 1.5rem 0 1.75rem;
}

/* Filter Toolbar */
.gallery-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.filter-pills {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--white);
  color: #1e293b;
  border: 1px solid rgba(36, 75, 58, 0.1);
  border-radius: 50px;
  padding: 0.45rem 0.95rem;
  font-size: 0.78rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(21, 61, 47, 0.04);
}

.filter-pill svg {
  width: 14px;
  height: 14px;
  color: var(--primary-green);
}

.filter-pill:hover {
  border-color: var(--primary-green);
  transform: translateY(-1px);
}

.filter-pill.active {
  background-color: var(--primary-green);
  color: var(--white);
  border-color: var(--primary-green);
  box-shadow: 0 4px 12px rgba(36, 75, 58, 0.22);
}

.filter-pill.active svg {
  color: var(--white);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background-color: var(--white);
  border: 1px solid rgba(36, 75, 58, 0.1);
  border-radius: 50px;
  padding: 0.44rem 0.95rem;
  width: 220px;
  box-shadow: 0 2px 8px rgba(21, 61, 47, 0.04);
}

.search-box input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.78rem;
  color: #1e293b;
  background: transparent;
}

.search-box svg {
  width: 15px;
  height: 15px;
  color: #64748b;
  flex-shrink: 0;
}

/* 5x2 Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.95rem;
}

.gallery-tile {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16 / 10.5;
  background-color: #e6e2d8;
  box-shadow: 0 4px 14px rgba(21, 61, 47, 0.08);
  padding: 0;
  display: block;
}

.gallery-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(var(--tile-scale, 1));
  transform-origin: var(--tile-origin, center center);
  transition: transform 0.35s ease;
}

.tile-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 52, 38, 0.85) 0%, transparent 55%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: left;
  padding: 0.65rem 0.75rem;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.gallery-tile:hover img {
  transform: scale(calc(var(--tile-scale, 1) * 1.06));
}

.gallery-tile:hover .tile-overlay {
  opacity: 1;
}

.tile-category {
  font-size: 0.64rem;
  font-weight: 700;
  color: #e4ba67;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.tile-title {
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.25;
}

.gallery-empty {
  background-color: var(--white);
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
  color: #475569;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
}

.reset-btn {
  background-color: var(--primary-green);
  color: var(--white);
  padding: 0.45rem 1.15rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
}

/* Bottom CTA Banner */
.gallery-cta-section {
  padding: 0 0 2.5rem;
}

.cta-banner {
  position: relative;
  background: linear-gradient(135deg, #1b4331 0%, #143627 100%);
  border-radius: 16px;
  overflow: hidden;
  padding: 1.45rem 2.25rem;
  box-shadow: 0 10px 28px rgba(20, 54, 39, 0.16);
}

.cta-leaf {
  position: absolute;
  width: 110px;
  height: 110px;
  color: rgba(214, 168, 95, 0.14);
  pointer-events: none;
}

.cta-leaf-left {
  bottom: -20px;
  left: -18px;
}

.cta-leaf-right {
  top: -18px;
  right: -18px;
}

.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.cta-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cta-icon {
  width: 46px;
  height: 46px;
  color: var(--gold);
  flex-shrink: 0;
}

.cta-icon svg {
  width: 100%;
  height: 100%;
}

.cta-title {
  font-size: clamp(1.1rem, 1.6vw, 1.35rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
  margin-bottom: 0.2rem;
}

.cta-subtitle {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.88);
}

.btn-donate {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background-color: var(--gold);
  color: #1a2e22;
  padding: 0.6rem 1.45rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.84rem;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.22);
}

.btn-donate svg {
  width: 15px;
  height: 15px;
}

.btn-donate:hover {
  background-color: #c89748;
  transform: translateY(-1px);
}

/* Lightbox */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 2000;
}

.lightbox-card {
  position: relative;
  background-color: var(--white);
  border-radius: 14px;
  overflow: hidden;
  max-width: 780px;
  width: 100%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.lightbox-card img {
  width: 100%;
  max-height: 70vh;
  object-fit: cover;
  display: block;
}

.lightbox-close {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: rgba(20, 52, 38, 0.88);
  color: var(--white);
  font-size: 1.3rem;
  line-height: 1;
}

.lightbox-caption {
  padding: 0.9rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.lightbox-tag {
  font-size: 0.68rem;
  font-weight: 700;
  color: #b88732;
  text-transform: uppercase;
}

.lightbox-caption h3 {
  font-size: 1rem;
  color: #1a2e22;
}

.lightbox-nav {
  display: flex;
  gap: 0.5rem;
}

.lightbox-nav button {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #eaf2e9;
  color: var(--primary-green);
  font-weight: 700;
}

.lightbox-nav button:hover {
  background-color: var(--primary-green);
  color: var(--white);
}

/* Responsive */
@media (max-width: 1120px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-hero {
    height: auto;
    min-height: 250px;
    padding: 2.5rem 0 3.25rem;
  }

  .hero-overlay {
    background: linear-gradient(
      to bottom,
      rgba(21, 56, 40, 0.9) 0%,
      rgba(21, 56, 40, 0.76) 100%
    );
  }

  .hero-arc {
    display: none;
  }

  .search-box {
    width: 100%;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-content {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .cta-banner {
    padding: 1.35rem;
  }
}
</style>
