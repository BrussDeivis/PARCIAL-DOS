
module.exports={
    calcularArea: function(shape, dimensions)  {
        let area;  // Definición de 'area'
        if (shape === 'circle') {
            let radius = dimensions.radius;  // Definición de 'radius'
            area = Math.PI * radius * radius;  // Uso de 'radius', definición de 'area'
        } else if (shape === 'square') {
            let side = dimensions.side;  // Definición de 'side'
            area = side * side;  // Uso de 'side', definición de 'area'
        } else if (shape === 'triangle') {
            let base = dimensions.base;  // Definición de 'base'
            let height = dimensions.height;  // Definición de 'height'
            area = 0.5 * base * height;  // Uso de 'base' y 'height', definición de 'area'
        } else {
            throw new Error('Unknown shape');
        }
        return area;  // Uso de 'area'
    }
}
