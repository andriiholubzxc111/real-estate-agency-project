import { createStore } from "vuex";

export default createStore({
  state: {
    productListData: [
      {
        id: 1,
        pib: "",
        district: "Центр",
        street: "Корзо 29",
        price: 150000,
        square_meters: 70,
        description: "2-кімнатна квартира з великим балконом, нова плитка, центральне опалення",
        phone_number: "3809932935",
        price_per_sqm: 2142.86,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 2,
        pib: "",
        district: "Боздош",
        street: "",
        price: 120000,
        square_meters: 60,
        description: "1-кімнатна квартира, ремонт в 2023 році, приватний вхід",
        phone_number: "3809932935",
        price_per_sqm: 2000,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 3,
        pib: "",
        district: "Шахта",
        street: "Другетів 112",
        price: 180000,
        square_meters: 80,
        description: "3-кімнатна квартира з власним гаражем, нова плитка, сучасне обладнання",
        phone_number: "3809932935",
        price_per_sqm: 2250,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 4,
        pib: "",
        district: "Минай",
        street: "Василя Комендаря 48",
        price: 130000,
        square_meters: 65,
        description: "2-кімнатна квартира з власним садом, ремонт в 2022 році",
        phone_number: "3809932935",
        price_per_sqm: 2000,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 5,
        pib: "",
        district: "Новий Район",
        street: "Шевченка 15",
        price: 160000,
        square_meters: 75,
        description: "3-кімнатна квартира з панорамними вікнами, нова техніка, ремонт в 2023 році",
        phone_number: "3809932935",
        price_per_sqm: 2133.33,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 6,
        pib: "",
        district: "Старий Район",
        street: "Франка 7",
        price: 110000,
        square_meters: 55,
        description: "1-кімнатна квартира, частковий ремонт, нова сантехніка",
        phone_number: "3809932935",
        price_per_sqm: 2000,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 7,
        pib: "",
        district: "Центр",
        street: "Грушевського 22",
        price: 140000,
        square_meters: 68,
        description: "2-кімнатна квартира з великим балконом, центральне опалення, нова кухня",
        phone_number: "3809932935",
        price_per_sqm: 2058.82,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 8,
        pib: "",
        district: "Боздош",
        street: "Лесі Українки 9",
        price: 125000,
        square_meters: 62,
        description: "1-кімнатна квартира, новий ремонт, панорамні вікна",
        phone_number: "3809932935",
        price_per_sqm: 2016.13,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 9,
        pib: "",
        district: "Шахта",
        street: "Коцюбинського 18",
        price: 170000,
        square_meters: 78,
        description: "3-кімнатна квартира з сучасною кухнею, ремонт в 2023 році, приватний вхід",
        phone_number: "3809932935",
        price_per_sqm: 2179.49,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      },
      {
        id: 10,
        pib: "",
        district: "Минай",
        street: "Стефаника 33",
        price: 135000,
        square_meters: 64,
        description: "2-кімнатна квартира, новий ремонт, центральне опалення",
        phone_number: "3809932935",
        price_per_sqm: 2109.38,
        publication_date: "2024.11.03",
        imgSrc: "https://bild.ua/images/thumb/full/00005f0c0d11481ae339.jpg",
        city: "Ужгород"
      }
    ],
    searchCity: '', 
    searchDistrict: '' 
  },
  getters: {
    filteredProducts: (state) => {
      return state.productListData.filter(product => {
        const cityMatch = state.searchCity ? product.city.toLowerCase().includes(state.searchCity.toLowerCase()) : true;
        const districtMatch = state.searchDistrict ? product.district.toLowerCase().includes(state.searchDistrict.toLowerCase()) : true;
        return cityMatch && districtMatch;
      });
    }
  },
  mutations: {
    setSearchCity(state, city) {
      state.searchCity = city;
    },
    setSearchDistrict(state, district) {
      state.searchDistrict = district;
    },
    addProduct(state, product) {
      state.productListData.push(product);
    }
  },
  actions: {
    updateSearchCity({ commit }, city) {
      commit('setSearchCity', city);
    },
    updateSearchDistrict({ commit }, district) {
      commit('setSearchDistrict', district);
    },
    addProduct({ commit }, product) {
      commit('addProduct', product);
    }
  },
  modules: {}
});
