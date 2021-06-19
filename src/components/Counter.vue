<template>
  <v-container class="">
    <v-row align="center" justify="space-between" class="mt-2 pa-2">
      <v-btn outlined color="cyan" @click="incrementCounter">INC</v-btn>
      <span class="cyan--text">{{ count }}</span>
      <v-btn outlined color="orange" @click="decrementCounter">DEC</v-btn>
    </v-row>
    <v-row justify="center" class="my-4">
      <v-btn
        @click="tada"
        rounded
        :loading="loading"
        :class="buttonLoadingStyle"
      >
        increment randomly
      </v-btn>
    </v-row>
    <MySnackbar :_snackbar="snackbar" @closed="snackbar = false" />
    <!-- <span> {{ user }} </span>
    <v-btn color="success" :loading="isUserLoading" @click="loadUser">
      user
    </v-btn> -->
    <v-row justify="center" class="mt-5">
      <span v-for="(vehicle, index) in vehicles" :key="index">
        <span>{{ vehicle.type }},</span>
      </span>
    </v-row>
    <v-btn
      color="success"
      class="mt-5"
      :loading="isVehiclesLoading"
      @click="loadVehciles"
    >
      fetch cars</v-btn
    >
  </v-container>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { CounterModule, UserModel, VehicleModel } from "@/store/index";
import MySnackbar from "@/components/MySnackbar.vue";
// import User from "@/models/user";

@Component({
  name: "Counter",
  components: { MySnackbar },
})
export default class Counter extends Vue {
  snackbar = false;

  // get user() {
  //   return UserModel.user ?? "no data";
  // }

  // get isUserLoading() {
  //   return UserModel.isUserLoading;
  // }

  // async loadUser() {
  //   UserModel.registerUser(
  //     new User(
  //       "name is optional",
  //       34,
  //       "2617235162",
  //       "a.h@gmai.com",
  //       "mars bitch"
  //     )
  //   );
  // }

  get vehicles() {
    return VehicleModel.vehicles;
  }

  get isVehiclesLoading() {
    return VehicleModel.vehiclesLoadingState;
  }

  loadVehciles() {
    VehicleModel.fetchAllVehicles();
  }

  get count(): number {
    return CounterModule.count;
  }

  get loading(): boolean {
    return CounterModule.isLoading;
  }

  get buttonLoadingStyle() {
    return {
      "success--text white": this.loading,
      "white--text success": !this.loading,
    };
  }

  incrementCounter(): void {
    CounterModule.incrementCounter();
  }

  decrementCounter(): void {
    CounterModule.decrementCounter();
  }

  async tada(): Promise<void> {
    await CounterModule.randomNumberIncrementer();
    this.snackbar = true;
  }
}
</script>


<style scoped>
</style>
