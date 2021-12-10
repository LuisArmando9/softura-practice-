import { User } from "../models/user";
import { HString } from "./hstring";
export class Credentials  {
    private user: User;
    constructor(){

    }
    public setUser(user: User){
        this.user = user;
    }
    public getUser(): User{
        return this.user;
    }
     
    private isValidUser():boolean{

       return  !HString.isEmpty(this.user.user);
    }
    private isValidPassword():boolean{
       
        return true;
    }
    private isValidEmail():boolean{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.user.email);
    }
    public valid():boolean{
        return this.isValidUser() && this.isValidEmail() && this.isValidPassword();
    }
    
}
