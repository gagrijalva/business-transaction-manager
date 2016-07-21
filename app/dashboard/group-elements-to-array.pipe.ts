import { Pipe, PipeTransform } from '@angular/core';
import { OrderSpec } from '../models/order-spec';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'groupElementsToArray'})
export class GroupElementsToArray implements PipeTransform {
  transform(orderSpecs: OrderSpec[], groupBy: number): Array<any>[] {

    let newArr = [];
    let arrLength = orderSpecs.length;
    let i = 0;

    while(i < arrLength) {
        newArr.push(orderSpecs.slice(i, i + 3));
        i = i + 3;
    }

    return newArr;
  }
}