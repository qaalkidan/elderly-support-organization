<template>
  <button :class="['base-button', variant]" :disabled="disabled" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<style scoped>
.base-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.base-button.primary {
  background-color: var(--primary-color);
  color: white;
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
