import Vehicle, { VehicleType } from "./vehicle";

export default class Car extends Vehicle {

    constructor(vehicleName: string, milage: number, rentalRate: number,
        brandName: string, description: string, imgLink: string,) {
        super(vehicleName, 'car', milage, rentalRate, brandName,
            description, imgLink)
    }

    public get vehicleName(): string { return this._vehicleName }
    public set vehicleName(vehicleName: string) { this._vehicleName = vehicleName }

    public get milage(): number { return this._milage }
    public set milage(milage: number) { this._milage = milage }

    public get rentalRate(): number { return this._rentalRate }
    public set rentalRate(rentalRate: number) { this._rentalRate = rentalRate }

    public get brandName(): string { return this._brandName }
    public set brandName(brandName: string) { this._brandName = brandName }

    public get description(): string { return this._description }
    public set description(description: string) { this._description = description }

    public get imgLink(): string { return this._imgLink }
    public set imgLink(imgLink: string) { this._imgLink = imgLink }

    public get type(): VehicleType { return this._vehicleType }
    public set type(type: VehicleType) { this._vehicleType = type }

    public static carFromDataObject(data: any): Car {
        return new Car(
            data.name,
            data.milage,
            data.rentalRate,
            data.brand,
            data.desc,
            data.image
        )
    }

}