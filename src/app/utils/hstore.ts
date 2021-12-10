import { Contact } from "../models/contact";

export class HStore {
    /**
     * 
     * @returns last id to contact that was inset at local storage
     */
    public static getLastIdConcatInsert(){
        let contact = 0;
        while(localStorage.getItem("contact"+contact)){
            contact++;
        }
        return contact;
    }
     /**
     * 
     * @returns last all contacts that was registred in local storage fow showing
     */
    public static getAllContacts(){
        let contact = 0;
        let contacts = [];
        let tempContact:string;

        while(tempContact = localStorage.getItem("contact"+contact)){
            contact++;
            contacts.push(JSON.parse(tempContact));
        }
        console.log(contacts);
        return contacts;

    }
     /**
     * 
     * @returns contact specify at localstore
     */
      public static getContact(id:number):Contact{
        return JSON.parse(localStorage.getItem("contact"+id));
    }
}
