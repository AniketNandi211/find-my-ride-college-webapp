<template>
  <v-snackbar v-model="snackbar">
    incremented by 5
    <v-spacer></v-spacer>
    <v-btn color="primary" :timeout="3000" @click="close">Close</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Emit, Prop, Watch } from "vue-property-decorator";
import Vue from "vue";

@Component({
  name: "MySnackbar",
})
export default class MySnackbar extends Vue {
  @Prop({ required: true, default: false }) _snackbar!: boolean;

  snackbar = this._snackbar;

  @Watch("_snackbar")
  onChange() {
    this.snackbar = this._snackbar;
  }

  @Emit("closed")
  close() {
    this.snackbar = false;
  }

  //snackbar = false;
}
</script>