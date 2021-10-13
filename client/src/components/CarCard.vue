<template>
  <v-card class="mx-auto ma-5" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="car.image"> </v-img>
    <v-card-title>{{ title }}</v-card-title>

    <div class="pa-3">
      <v-card-text>
        <p>
          Owner:
          <span class="font-weight-bold text--primary"
            >{{ car.first_name }} {{ car.last_name }}</span
          >
        </p>
        <p>
          Year: <span class="font-weight-bold text--primary">{{ car.year_of_make }}</span
          ><br />Miles: <span class="font-weight-bold text--primary">{{ car.miles }}</span>
        </p>
        <p>
          Price: <span class="font-weight-bold text--primary">{{ price }}</span>
        </p>
        <p>
          {{ car.description }}
        </p>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn class="red white--text" @click="$emit('deleteCar', car.id)">
          Delete
        </v-btn>
        <v-btn
          v-if="car.status == 'available'"
          class="green white--text"
          :to="`/details/${car.id}`"
        >
          Details
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
    },
  },
  methods: {},
  computed: {
    title() {
      if (this.car.status != 'available') {
        return `${this.car.title} *${this.car.status.toUpperCase()}*`;
      } else {
        return this.car.title;
      }
    },
    price() {
      if (this.car.status != 'available') {
        return 'N/A';
      } else {
        return this.car.price;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
