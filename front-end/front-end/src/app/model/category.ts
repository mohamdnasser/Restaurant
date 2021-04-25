export class Category {

    public id: Number; 
    public name: String;
    public logo: String;
    public data_create: Date;
    public data_update: Date;


    constructor(id: Number, name: String, logo: String, data_create: Date, data_update: Date ){
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.data_create = data_create;
        this.data_update = data_update;
    }

}
