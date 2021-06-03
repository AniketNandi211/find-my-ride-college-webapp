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
  </v-container>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { CounterModule } from "@/store/index";
import MySnackbar from "@/components/MySnackbar.vue";

@Component({
  name: "Counter",
  components: { MySnackbar },
})
export default class Counter extends Vue {
  snackbar = false;

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
