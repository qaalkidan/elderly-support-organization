<template>
  <div class="base-pagination">
    <button @click="$emit('prev')" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="$emit('next')" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: Number,
  totalPages: Number
});

defineEmits(['prev', 'next']);
</script>

<style scoped>
.base-pagination {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
