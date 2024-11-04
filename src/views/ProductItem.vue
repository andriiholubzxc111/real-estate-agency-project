<template>
   <div class="container">
     <div class="image-container">
       <img :src="prodData.imgSrc" alt="Property Image">
     </div>
     <div class="content">
       <div>
         <div class="price-container">
           <h2 class="price">{{ prodData.price }}$</h2>
           <span class="price-per-sqm">{{ prodData.price_per_sqm }}$/м&sup2;</span>
           <i class="fas fa-check-circle check-icon"></i>
         </div>
         <p class="address">вул. {{ prodData.street }}</p>
         <div class="separator"></div>
         <p class="description">{{ prodData.description }}</p>
       </div>
       <div class="footer">
         <p>Продам квартиру</p>
         <span>·</span>
         <span>Опубліковано {{ prodData.publication_date }}</span>
         <span>·</span>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    prodData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 10px;
}

.image-container img {
  width: 100%;
  height: auto;
}

.content {
  padding: 16px;
}

.price-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 24px;
  color: #333;
  margin: 0;
}

.price-per-sqm {
  font-size: 14px;
  color: #777;
}

.check-icon {
  color: green;
  margin-left: 8px;
}

.address {
  font-size: 16px;
  color: #555;
  margin: 8px 0;
}

.separator {
  height: 1px;
  background-color: #eee;
  margin: 16px 0;
}

.description {
  font-size: 14px;
  color: #666;
}

.footer {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.footer p {
  margin: 0;
}

.footer span {
  margin: 0 4px;
}
</style>
