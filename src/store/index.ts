import Vue from 'vue'
import Vuex from 'vuex'
import Counter from '@/store/modules/counter'
import { getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

// Root state just holds info about the app and nothing else
const store = new Vuex.Store({
  state: {
    appVersion: 0.1,
    appName: 'Find my ride',
    desc: 'A web app for car rental service'
  },
  modules: {
    Counter
  }
})

export default store
export const CounterModule = getModule(Counter, store)