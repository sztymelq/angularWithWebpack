export function productDirective() {
    return {
        restrict: 'A',
        scope: {
            product: '='
        },
        replace: true,
        template: '<span style="margin: 1em"> {{product.name}} -> {{product.price | currency}} </span>',
    };
}