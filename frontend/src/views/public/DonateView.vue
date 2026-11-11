<template>
  <div class="donate-view">
    <section class="donate-hero">
      <h1>Make a Donation</h1>
      <p>Your contribution makes a real difference</p>
    </section>
    <section class="donate-content">
      <div class="donation-form">
        <h2>Choose your donation amount</h2>
        <div class="amount-options">
          <button
            v-for="amount in amounts"
            :key="amount"
            :class="{ active: selectedAmount === amount }"
            @click="selectedAmount = amount"
          >
            ${{ amount }}
          </button>
        </div>
        <BaseInput v-model="customAmount" label="Or enter custom amount" placeholder="$" />
        <BaseButton @click="handleDonate">Donate Now</BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '../../components/common/BaseInput.vue';
import BaseButton from '../../components/common/BaseButton.vue';

const amounts = [25, 50, 100, 250];
const selectedAmount = ref(50);
const customAmount = ref('');

const handleDonate = () => {
  const amount = customAmount.value || selectedAmount.value;
  console.log('Donation amount:', amount);
};
</script>

<style scoped>
.donate-hero {
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.donate-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.amount-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

.amount-options button {
  padding: 1rem;
  border: 2px solid var(--border-color);
  background: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.25rem;
  transition: all 0.3s;
}

.amount-options button.active {
  border-color: var(--primary-color);
  background-color: var(--primary-color);
  color: white;
}
</style>
