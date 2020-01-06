export class ClientOrder {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private dateOrder: Date,
        private paymentMethod: string,
        private photo: string,
        private size: string,
        private paper: string,
        private borderType: string,
        private borderSize: string,
        private borderColor: string
    ) { }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getEmail() {
        return this.email;
    }

    public getDateOrder() {
        return this.dateOrder;
    }

    public getPaymentMethod() {
        return this.paymentMethod;
    }

    public getPhoto() {
        return this.photo
    }

    public getSize() {
        return this.size
    }

    public getPaper() {
        return this.paper
    }

    public getBorderType() {
        return this.borderType
    }

    public getBorderSize() {
        return this.borderSize
    }

    public getBorderColor() {
        return this.borderColor
    }

} 