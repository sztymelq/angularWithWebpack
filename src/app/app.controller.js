export function appCtrl(appService) {
    const that = this;
    console.log('appService.value', appService.value);
    console.log('appService.products', appService.products);
    this.products = appService.products;

    this.productSelected = function (product) {
        that.currentProduct = product;
    }

}