export default class Error{
    private _codeName: string
    private _description: string

 constructor(codeName: string, description: string){
     this._codeName= codeName
     this._description= description

 }
public get codeName(): string{return this.codeName}
public set codeName(codeName:string) {this._codeName= codeName}

public get description(): string{return this.description}
public set description(description:string) {this._description= description}
}
