import Person from '@/models/person'
import Bike from './bike'
import Car from './car'
//implement abstract design pattern
export default class User extends Person {

    private _destination: string
    private _origin: string
    private _currentLocation: string
    private _fabVehicles: Array<Car | Bike>

    public constructor(name: string, age: number, mobile: string, email?: string, address?: string, destination?: string, origin?: string, currentLocation?: string) {
        super(name, age, mobile, email ?? undefined, address ?? undefined)
        this._destination = destination ?? 'n/a'
        this._origin = origin ?? 'n/a'
        this._currentLocation = currentLocation ?? 'n/a'
        this._fabVehicles = new Array<Car | Bike>()
    }

    public get destination(): string { return this._destination }
    public set destination(destination: string) { this._destination = destination }

    public get origin(): string { return this._origin }
    public set origin(origin: string) { this._origin = origin }

    public get currentLocation(): string { return this._currentLocation }
    public set currentLocation(currentLocation: string) { this._currentLocation = currentLocation }

    public get favouriteVehicles(): Array<Car | Bike> { return this._fabVehicles }
    public set favouriteVehicles(fabVehicle: Array<Car | Bike>) { this._fabVehicles = fabVehicle }

    public addVehicleToFav(vehicle: Car | Bike): void {
        this._fabVehicles.push(vehicle)
    }

    public removeVehicleFromFav(vehicle: Car | Bike): void {
        const index = this._fabVehicles.indexOf(vehicle)
        if (index != -1) this._fabVehicles.splice(index, 1)
    }

    // parse data from firebase result and construct a new User object
    public static userFromData(data: any): User {
        return new User(
            data.name,
            data.age,
            data.mobile,
            data.email,
            data.address
        )
    }

}