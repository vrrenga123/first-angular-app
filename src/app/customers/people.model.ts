import * as moment from 'moment';
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";

export class CopyObject{
    copy(object: any, newObject: any){
        if (!!!object || !!!newObject){
            return newObject;
        }
        const keys = Object.keys(object);
        if (!!!keys){
            return newObject;
        }
        keys.forEach(key => {
            newObject[key] = object[key];
        })
        return newObject;
    }
}



export class People extends CopyObject {

         _userName:string;
         _firstName:string;
         _lastName:string;
         _middleName:string;
         _gender:string;
         _age:string;
        //  constructor(data: any){
        //      super();
        //      this.copy(data, this);
        // }

        constructor(un : string, fn : string, ln :string){
            super();
            this.UserName = un;
            this.FirstName = fn;
            this.LastName = ln;
        }

         get UserName () : string {
            return this._userName;       
         }   
         set UserName (value : string)  {
            this._userName = value;       
         }  


         get FirstName () : string {
            return this._firstName;       
         }   
         set FirstName (value : string)  {
            this._firstName = value;       
         }  



         get LastName () : string {
            return this._lastName;       
         }   
         set LastName (value : string)  {
            this._lastName = value;       
         }  



         get MiddleName () : string {
            return this._middleName;       
         }   
         set MiddleName (value : string)  {
            this._middleName = value;       
         }  


         get Gender () : string {
            return this._gender;       
         }   
         set Gender (value : string)  {
            this._gender = value;       
         }  


         get Age () : string {
            return this._age;       
         }   
         set Age (value : string)  {
            this._age = value;       
         }  




}