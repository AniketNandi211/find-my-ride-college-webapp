import Vehicle, { VehicleType } from "./vehicle";

export default class Bike extends Vehicle{
    
    constructor(vehicleName: string , milage?: number, rentalRate?: number,
        bookingDuration?: number, brandName?: string, description?: string,imgLink?: string,){
            super(vehicleName, 'bike', milage! , rentalRate! , bookingDuration! , brandName!,
                description!, imgLink!)
    }

    public get vehicleName(): string { return super._vehicleName}
    public set vehicleName(vehicleName: string)  { super._vehicleName = vehicleName}

    public get milage(): number { return super._milage}
    public set milage(milage: number) { super._milage = milage }

    public get rentalRate(): number { return super._rentalRate}
    public set rentalRate( rentalRate: number) {super._rentalRate = rentalRate}

    public get bookingDuration(): number{ return super._bookingDuration}
    public set bookingDuration(bookingDuration: number){  super._bookingDuration = bookingDuration}

    public get brandName(): string { return super._brandName }
    public set brandName(brandName: string) { super._brandName = brandName }
 
    public get description(): string { return super._description}
    public set description(description: string)  { super._description = description }

    public get imgLink(): string { return super._imgLink}
    public set imgLink(imgLink: string) { super._imgLink = imgLink }

    public get type(): VehicleType {return super._vehicleType}
    public set type(type: VehicleType)  { super._vehicleType = type }
}