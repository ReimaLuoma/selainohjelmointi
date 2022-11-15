class priceListModule {
    #priceList;

    constructor(pricelist){
        this.#priceList = pricelist;
    }

    setPriceList(pricelist) {
        this.#priceList = pricelist;
    }

    getPrice(item, quantity){
        
        for(let i = 0; i < this.#priceList.length; i++){
            
            if(this.#priceList[i].itemid == item){

                for(let j = this.#priceList[i].prices.length - 1; j >= 0; j--){
                    
                    if(this.#priceList[i].prices[j].qty < quantity){
                        return quantity * this.#priceList[i].prices[j].price;
                    }

                }
            }
        }
    }
}

export default priceListModule;