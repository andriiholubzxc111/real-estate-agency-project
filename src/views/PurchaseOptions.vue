<template>
  <div>
    <search-item @update-search="handleSearchUpdate" />
    <h1>Список пропозицій</h1>
    <product-list
      :filterCity="searchCity"
      :filterDistrict="searchDistrict"
      @update-sort-order="updateSortOrder"
    />
  </div>
</template>

<script>
import ProductList from '@/views/index.vue';
import SearchItem from '@/components/SearchItem.vue';

export default {
  name: 'PurchaseOptions',
  components: { ProductList, SearchItem },
  data() {
    return {
      searchCity: '',
      searchDistrict: '',
      sortOrder: 'asc'
    };
  },
  methods: {
    handleSearchUpdate(searchParams) {
      this.searchCity = searchParams.city;
      this.searchDistrict = searchParams.district;
    },
    updateSortOrder(order) {
      this.sortOrder = order;
    }
  }
};
</script>

<style scoped>
/* Додайте стилі за потреби */
</style>
