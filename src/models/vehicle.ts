import Bike from "./bike"
import Car from "./car"

export type VehicleType = 'car' | 'bike'

export default abstract class Vehicle {

    protected _vehicleName: string
    protected _milage: number
    protected _rentalRate: number
    protected _brandName: string
    protected _description: string
    protected _imgLink: string
    protected _vehicleType: VehicleType


    constructor(vehicleName: string, vehicleType: VehicleType, milage: number, rentalRate: number, brandName: string, description: string, imgLink: string) {
        this._vehicleName = vehicleName
        this._vehicleType = vehicleType
        this._milage = milage
        this._rentalRate = rentalRate
        this._brandName = brandName
        this._description = description
        this._imgLink = imgLink
    }

    public abstract get vehicleName(): string
    public abstract set vehicleName(vehicleName: string)

    public abstract get milage(): number
    public abstract set milage(milage: number)

    public abstract get rentalRate(): number
    public abstract set rentalRate(rentalRate: number)

    public abstract get brandName(): string
    public abstract set brandName(brandName: string)

    public abstract get description(): string
    public abstract set description(description: string)

    public abstract get imgLink(): string
    public abstract set imgLink(imgLink: string)

    public abstract get type(): VehicleType
    public abstract set type(type: VehicleType)

}