import { asyncCounterGenerator } from "@/utilities/counterApiMock";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({
    name: 'Counter',
})
export default class Counter extends VuexModule {


    // these fields must be and cannot be changed without @Mutation (s)

    private counter = 0
    private asyncCounter = 0
    private loading = false

    @Mutation
    private changeLoadingState(loading: boolean) {
        this.loading = loading
    }

    @Mutation
    private loadAsyncCounter(num: number) {
        this.asyncCounter = num
    }

    @Mutation
    private counterInc(num = 1) {
        this.counter += num
    }

    @Mutation
    private counterDec() {
        this.counter--
    }

    @Action({ rawError: true })
    incrementCounter() {
        this.context.commit('counterInc')
    }

    @Action({ rawError: true })
    decrementCounter() {
        this.context.commit('counterDec')
    }

    @Action({ rawError: true })
    async randomNumberIncrementer(): Promise<void> {
        this.context.commit('changeLoadingState', true)
        console.log(this.counter)
        this.context.commit('loadAsyncCounter', await asyncCounterGenerator(5, 1000))
        this.context.commit('changeLoadingState', false)
        this.context.commit('counterInc', this.asyncCounter)
        this.context.commit('loadAsyncCounter', 0)
    }

    get count(): number {
        return this.counter
    }

    get isLoading(): boolean {
        return this.loading
    }

}