<template>
  <div class="sell-form">
    <h1>Додати оголошення</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="form.city" placeholder="Місто" required>
      <input type="text" v-model="form.district" placeholder="Район" required>
      <input type="text" v-model="form.street" placeholder="Вулиця" required>
      <input type="number" v-model="form.price" placeholder="Ціна" required>
      <input type="text" v-model="form.pib" placeholder="ПІБ" required>
      <input type="number" v-model="form.square_meters" placeholder="Кількість квадратних метрів" required>
      <textarea v-model="form.description" placeholder="Опис" required></textarea>
      <input type="tel" v-model="form.phone_number" placeholder="Номер телефону" required>
      <input type="file" @change="handleFileUpload">
      <button type="submit">Додати</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SellView',
  data() {
    return {
      form: {
        city: '',
        district: '',
        street: '',
        price: null,
        pib: '',
        square_meters: null,
        description: '',
        phone_number: '',
        imgSrc: ''
      }
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.imgSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitForm() {
      this.form.id = Date.now(); 
      this.form.price_per_sqm = (this.form.price / this.form.square_meters).toFixed(2);
      this.form.publication_date = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      this.addProduct(this.form);
      alert('Оголошення додано!');
      this.$router.push('/buy');
    }
  }
}
</script>
<style scooped>
.sell-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.sell-form h1 {
  text-align: center;
  margin-bottom: 20px;
}

.sell-form form {
  display: flex;
  flex-direction: column;
}

.sell-form input,
.sell-form textarea {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.sell-form button {
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color:black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.sell-form button:hover {
  background-color: gray;
}
</style>