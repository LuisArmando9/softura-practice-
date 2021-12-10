export class HStore {
    public static getLastIdConcatInsert(){
        let contact = 0;
        while(localStorage.getItem("contact"+contact)){
            contact++;
        }
        return contact;
    }
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
}
