<template>
  <v-app
    ><LogoBar />
    <v-main> <router-view :cars="cars" @order="order" @deleteCar="deleteCar($event)"></router-view></v-main>
  </v-app>
</template>

<script>
import LogoBar from '@/components/LogoBar.vue';
// import CarCards from '@/components/CarCards.vue';

import axios from 'axios';

export default {
  name: 'Home',

  components: {
    LogoBar,
    // CarCards,
  },

  data() {
    return {
      cars: [],
    };
  },
  methods: {
    async getCars() {
      const a = await axios({
        method: 'GET',
        url: 'http://localhost:3000/cars',
      });
      this.cars = a.data.data;
    },
    order(car) {
      axios({
        method: 'PATCH',
        url: `http://127.0.0.1:3000/cars/${car.id}`,
        data: {
          status: 'reserved',
        },
      });
      this.getCars();
    },
    deleteCar(id){
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/cars/${id}`,
      });
      this.getCars();
    }
  },
  created() {
    this.getCars();
  },
};
</script>
