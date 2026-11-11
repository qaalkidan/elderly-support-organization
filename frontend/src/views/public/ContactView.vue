<template>
  <div class="contact-view">
    <section class="contact-hero">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you</p>
    </section>
    <section class="contact-content">
      <div class="contact-form">
        <h2>Send us a message</h2>
        <form @submit.prevent="handleSubmit">
          <BaseInput v-model="form.name" label="Name" placeholder="Your name" />
          <BaseInput v-model="form.email" type="email" label="Email" placeholder="Your email" />
          <BaseInput v-model="form.message" label="Message" placeholder="Your message" />
          <BaseButton type="submit">Send Message</BaseButton>
        </form>
      </div>
      <div class="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 123 Care Street, City, State 12345</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@elderlysupport.org</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '../../components/common/BaseInput.vue';
import BaseButton from '../../components/common/BaseButton.vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
};
</script>

<style scoped>
.contact-hero {
  background-color: var(--primary-color);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
