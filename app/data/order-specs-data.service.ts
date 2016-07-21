import { InputType } from '../shared/input-type';

export class OrderSpecsDataService {
  createDb() {
    let specs = [
      {id: 1, spec: 'Forma de pastel', inputType: InputType.Text, options: 'Tradicional,Redondo,Rectangular,1 Piso,Forma Especial'},
      {id: 2, spec: '# Personas', inputType: InputType.Text, options: ""},
      {id: 3, spec: 'Sabor', inputType: InputType.Option, options: "Vainilla,Chocolate"},
      {id: 4, spec: 'Relleno', inputType: InputType.Option, options: "Fresa,Cajeta,Nutella"},
      {id: 5, spec: 'Sabor Betún', inputType: InputType.Option, options: "Vainilla,Chocolate"},
      {id: 6, spec: 'Nombre Festejado', inputType: InputType.Text, options: ""},
      {id: 7, spec: 'Dibujo', inputType: InputType.Text, options: ""},
      {id: 8, spec: 'Cliente', inputType: InputType.Text, options: ""},
      {id: 9, spec: 'Teléfono', inputType: InputType.Text, options: ""},
      {id: 10, spec: 'Hora de entrega', inputType: InputType.Text, options: ""},
      {id: 11, spec: 'Anticipo', inputType: InputType.Text, options: ""},
      {id: 12, spec: 'Precio', inputType: InputType.Text, options: ""},
      {id: 13, spec: 'Info. Adicional', inputType: InputType.Text, options: ""},
      {id: 14, spec: 'Estatus', inputType: InputType.Option, options: "Entregado,En Proceso"},
    ];
    return {specs};
  }
}
