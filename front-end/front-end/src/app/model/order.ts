export class Order {

    id: Number; 
    name: String;
    description: String;
    img: String;
    price: Number;
    data_create: Date;
    data_update: Date;


    constructor(id: Number, name: String, description: String, img: String, price: Number, data_create: Date, data_update: Date  ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.price = price;
        this.data_create = data_create;
        this.data_update = data_update;
    }


}
