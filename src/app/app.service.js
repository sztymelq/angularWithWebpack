export function appService() {
    this.value = 1337;
    this.products = [
        { name: 'Milk', price: 1.05, description: 'nice milk' },
        { name: 'Salami', price: 2.5, description: 'nice salami' },
        { name: 'Bread', price: 0.85, description: 'nice bread' }
    ];

    return this;
}