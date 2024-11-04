<template>
  <div>
    <input
      type="text"
      placeholder="Введіть місто"
      v-model="city"
      @input="emitSearchUpdate"
    />
    <input
      type="text"
      placeholder="Введіть район"
      v-model="district"
      @input="emitSearchUpdate"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      district: ''
    };
  },
  methods: {
    emitSearchUpdate() {
      this.$emit('update-search', {
        city: this.city,
        district: this.district
      });
    }
  }
};
</script>

<style scoped>

</style>
