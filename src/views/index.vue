<template>
  <div>
    <select v-model="sortOrder">
      <option value="asc">За зростанням</option>
      <option value="desc">За зменшенням</option>
    </select>
    <div class="cards-container">
      <product-item
        v-for="prod in sortedProducts"
        :key="prod.id"
        :prod-data="prod"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from '@/views/ProductItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  props: {
    filterCity: {
      type: String,
      default: ''
    },
    filterDistrict: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sortOrder: 'asc' 
    };
  },
  computed: {
    ...mapState(['productListData']),
    filteredProducts() {
      return this.productListData.filter(product => {
        const matchesCity = this.filterCity
          ? product.city.toLowerCase().includes(this.filterCity.toLowerCase())
          : true;
        const matchesDistrict = this.filterDistrict
          ? product.district.toLowerCase().includes(this.filterDistrict.toLowerCase())
          : true;
        return matchesCity && matchesDistrict;
      });
    },
    sortedProducts() {
      return [...this.filteredProducts].sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
  }
}
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
}

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
  margin: 10px;
}
</style>