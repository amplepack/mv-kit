import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deposits'
})
export class DepositsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
