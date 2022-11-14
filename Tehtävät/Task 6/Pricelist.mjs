class priceListModule {
    #priceList;

    constructor(pricelist){
        this.#priceList = pricelist;
    }

    setPriceList(pricelist) {
        this.#priceList = pricelist;
    }

    getPrice(itemId, quantity){
        for(itemid in this.#priceList){
            if(itemid == itemId){

                for(i = this.#priceList.itemId.prices.length - 1; i--; i >= 0){
                    
                    if(this.#priceList.itemId.prices.qty < quantity){
                        return quantity * this.#priceList.itemId.prices.price;
                    }

                }
                
            }
        }
    }
}

export {setPriceList, getPrice};