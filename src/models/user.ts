import Person from '@/models/person'
import Bike from './bike'
import Car from './car'
//implement abstract design pattern
export default class User extends Person{

     private _destination: string
     private _origin: string
     private _currentLocation: string
     private _fabVehicle: Array<Car | Bike>

  constructor(name: string, destination: string, origin: string, currentLocation?: string){
      super(name)
      this._destination = destination
      this._origin = origin
      this._currentLocation = currentLocation!
      this._fabVehicle = new Array<Car | Bike>()
     } 

      public get destination(): string {return this._destination}
      public set destination(destination: string) {this._destination = destination} 

      public get origin(): string {return this._origin}
      public set origin(origin: string) {this._origin = origin} 

      public get currentLocation(): string {return this._currentLocation}
      public set currentLocation(currentLocation: string) {this._currentLocation = currentLocation}

      public get favouriteVehicles(): Array<Car | Bike> { return this._fabVehicle}
      public set favouriteVehicles(fabVehicle: Array<Car | Bike> )  { this._fabVehicle = fabVehicle}

      public addVehicleToFav(vehicle: Car | Bike): void {
          this._fabVehicle.push(vehicle)
      }

      public removeVehicleFromFav(vehicle: Car | Bike): void {
           const index = this._fabVehicle.indexOf(vehicle)
           if(index != -1) this._fabVehicle.splice(index, 1)
      }


}