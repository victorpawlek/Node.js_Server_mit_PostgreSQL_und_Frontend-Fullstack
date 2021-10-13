<template>
  <v-container class="d-flex">
    <v-card v-if="car" class="mx-auto ma-5 " max-width="500">
      <v-img class="white--text align-end" :src="car.image"> </v-img>
      <div class="d-flex justify-center">
        <v-card-title>{{ title }}</v-card-title>
      </div>

      <div class=" pa-3">
        <v-card-text
          ><v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Price
                  </th>
                  <th class="text-left">
                    Miles
                  </th>
                  <th class="text-left">
                    Year of Make
                  </th>
                  <th class="text-left">
                    Current owner
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ car.price }}</td>
                  <td>{{ car.miles }}</td>
                  <td>{{ car.year_of_make }}</td>
                  <td>{{ car.first_name }} {{ car.last_name }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <p>
            {{ car.description }}
          </p>
        </v-card-text>

        <v-card-actions class="d-felx justify-space-between">
          <v-btn class="blue white--text" :to="`/`">
            Go Back
          </v-btn>
          <v-btn v-if="car.status == 'available'" class="red white--text" @click="order">
            Order Car
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-container>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: '1',
    },
    cars: {
      type: Array,
    },
  },

  computed: {
    car() {
      return this.cars.find((car) => car.id == this.id);
    },
    title() {
      if (this.car.status != 'available') {
        return `${this.car.title} *${this.car.status.toUpperCase()}*`;
      } else {
        return this.car.title;
      }
    },
  },
  methods: {
    order() {
      this.$emit('order',this.car);

    },
  },
};
</script>

<style lang="scss" scoped></style>
