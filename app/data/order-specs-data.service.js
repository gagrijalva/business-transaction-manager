"use strict";
var input_type_1 = require('../shared/input-type');
var OrderSpecsDataService = (function () {
    function OrderSpecsDataService() {
    }
    OrderSpecsDataService.prototype.createDb = function () {
        var specs = [
            { id: 1, spec: 'Forma de pastel', inputType: input_type_1.InputType.Text, options: 'Tradicional,Redondo,Rectangular,1 Piso,Forma Especial' },
            { id: 2, spec: '# Personas', inputType: input_type_1.InputType.Text, options: "" },
            { id: 3, spec: 'Sabor', inputType: input_type_1.InputType.Option, options: "Vainilla,Chocolate" },
            { id: 4, spec: 'Relleno', inputType: input_type_1.InputType.Option, options: "Fresa,Cajeta,Nutella" },
            { id: 5, spec: 'Sabor Betún', inputType: input_type_1.InputType.Option, options: "Vainilla,Chocolate" },
            { id: 6, spec: 'Nombre Festejado', inputType: input_type_1.InputType.Text, options: "" },
            { id: 7, spec: 'Dibujo', inputType: input_type_1.InputType.Text, options: "" },
            { id: 8, spec: 'Cliente', inputType: input_type_1.InputType.Text, options: "" },
            { id: 9, spec: 'Teléfono', inputType: input_type_1.InputType.Text, options: "" },
            { id: 10, spec: 'Hora de entrega', inputType: input_type_1.InputType.Text, options: "" },
            { id: 11, spec: 'Anticipo', inputType: input_type_1.InputType.Text, options: "" },
            { id: 12, spec: 'Precio', inputType: input_type_1.InputType.Text, options: "" },
            { id: 13, spec: 'Info. Adicional', inputType: input_type_1.InputType.Text, options: "" },
            { id: 14, spec: 'Estatus', inputType: input_type_1.InputType.Option, options: "Entregado,En Proceso" },
        ];
        return { specs: specs };
    };
    return OrderSpecsDataService;
}());
exports.OrderSpecsDataService = OrderSpecsDataService;
//# sourceMappingURL=order-specs-data.service.js.map