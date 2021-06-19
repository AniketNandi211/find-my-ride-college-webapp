import Car from '@/models/car'
import Bike from '@/models/bike'
import { vehiclesCollection } from '../firebase'
import { VehicleType } from '@/models/vehicle'

// interface FirebaseVehicleData {
//     name: string;
//     milage: number;
//     rentalRate: number;
//     brand: string;
//     image: string;
//     desc: string;
//     type: VehicleType;
// }

export default class VehicleService {

    private constructor() {
        // can't be instantiated
    }

    private static createProceduralVehicleObjects(dataset: any): Car | Bike {
        if (dataset.type === 'car') return Car.carFromDataObject(dataset)
        return Bike.bikeFromDataObject(dataset)
    }

    static async getAllVehicles(): Promise<Array<Car | Bike>> {
        const vehicles = Array<Car | Bike>()
        // firebase query
        vehiclesCollection.get()
            .then(snapshot => {
                snapshot.docs.map(
                    doc => vehicles.push(VehicleService.createProceduralVehicleObjects(doc.data()))
                )
            })
        return vehicles
    }

    static async getAllCars(): Promise<Array<Car>> {
        const cars = Array<Car>()
        // firebase query
        vehiclesCollection.where('type', '==', 'car')
            .get()
            .then(snapshot => {
                snapshot.docs.map(
                    doc => cars.push(Car.carFromDataObject(doc.data()))
                )
            })
        return cars
    }

    static async getAllBikes(): Promise<Array<Bike>> {
        const bikes = Array<Bike>()
        // firebase query
        vehiclesCollection.where('type', '==', 'bike')
            .get()
            .then(snapshot => {
                snapshot.docs.map(
                    doc => bikes.push(Bike.bikeFromDataObject(doc.data()))
                )
            })
        return bikes
    }

    static async addCar(car: Car) {
        const carDocument = await vehiclesCollection.add({
            name: car.vehicleName,
            milage: car.milage,
            rentalRate: car.rentalRate,
            brand: car.brandName,
            image: car.imgLink,
            desc: car.description,
            type: car.type
        })
        return carDocument.id
    }

    static async addBike(bike: Bike) {
        const bikeDocument = await vehiclesCollection.add({
            name: bike.vehicleName,
            milage: bike.milage,
            rentalRate: bike.rentalRate,
            brand: bike.brandName,
            image: bike.imgLink,
            desc: bike.description,
            type: bike.type
        })
        return bikeDocument.id
    }

}