import VehicleService from "@/firebase/services/VehicleService";
import Bike from "@/models/bike";
import Car from "@/models/car";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({
    name: 'vehicle',
})
export default class VehicleModule extends VuexModule {

    // datasets for list of vehicles
    private _vehicles = Array<Car | Bike>()
    private _vehiclesLoadingState = false

    // datasets for list of cars
    private _cars = Array<Car>()
    private _carsLoadingState = false

    // datasets for list of bikes
    private _bikes = Array<Bike>()
    private _bikesLoadingState = false

    // mutations for list of vehicles
    @Mutation
    private setVehiclesLoadingState(state: boolean) {
        this._vehiclesLoadingState = state
    }

    @Mutation
    private setVehicles(cars: Array<Car | Bike>) {
        this._vehicles = cars
    }

    // action(s) for list of vehicles

    @Action({ rawError: true })
    public async fetchAllVehicles(): Promise<void> {
        this.context.commit('setVehiclesLoadingState', true)
        const vehicles = await VehicleService.getAllVehicles()
        console.log(vehicles)
        this.context.commit('setVehicles', vehicles)
        this.context.commit('setVehiclesLoadingState', false)
    }

    // mutations for list of cars
    @Mutation
    private setCarsLoadingState(state: boolean) {
        this._carsLoadingState = state
    }

    @Mutation
    private setCars(cars: Array<Car>) {
        this._cars = cars
    }

    // action(s) for list of cars
    @Action({ rawError: true })
    public async fetchAllCars(): Promise<void> {
        this.context.commit('setCarsLoadingState', true)
        this.context.commit('setCars', await VehicleService.getAllCars())
        this.context.commit('setCarsLoadingState', false)
    }

    // mutations for list of bikes
    @Mutation
    private setBikesLoadingState(state: boolean) {
        this._bikesLoadingState = state
    }

    @Mutation
    private setBikes(bikes: Array<Bike>) {
        this._bikes = bikes
    }

    // action(s) for list of bikes
    @Action({ rawError: true })
    public async fetchAllBikes(): Promise<void> {
        this.context.commit('setBikesLoadingState', true)
        this.context.commit('setBikes', await VehicleService.getAllBikes())
        this.context.commit('setBikesLoadingState', false)
    }

    // getters for list of vehicles
    get vehicles() {
        return this._vehicles
    }

    get vehiclesLoadingState() {
        return this._vehiclesLoadingState
    }

    // getters for list of cars
    get cars() {
        return this._cars
    }

    get carsLoadingState() {
        return this._carsLoadingState
    }

    // getters for list of bikes
    get bikes() {
        return this._bikes
    }

    get bikesLoadingState() {
        return this._bikesLoadingState
    }

}