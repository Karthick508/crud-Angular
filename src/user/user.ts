export class User {

id : string;
name : number;
password:string;
role:string;

constructor( values: Object = {}){
Object.assign(this, values);
}


}