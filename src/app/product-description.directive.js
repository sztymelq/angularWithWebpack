export function productDescription() {
    return {
        restrict: 'E',
        scope: {
            description: '='
        },
        template: '<div>Description: {{description}}</div>'
    }
}