/**
 * Person class represents 
 * distinct persons
 */
export default class Person {

    private _name: string
    private _age: number
    private _mobile: string
    private _email: string
    private _address: string

    constructor(name: string, age: number, mobile: string, email?: string, address?: string) {
        this._name = name
        this._age = age
        this._mobile = mobile
        this._email = email!
        this._address = address!
    }

    public get name(): string { return this._name }
    public set name(name: string) { this._name = name }

    public get age(): number { return this._age }
    public set age(age: number) { this._age = age }

    public get mobile(): string { return this._mobile }
    public set mobile(mobile: string) { this._mobile = mobile }

    public get email(): string { return this._email }
    public set email(email: string) { this._email = email }

    public get address(): string { return this._address }
    public set address(address: string) { this._address = address }

    public validatEmail(): boolean {
        const regExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(String(this._email).toLowerCase());
    }

}