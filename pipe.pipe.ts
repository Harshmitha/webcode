import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerIFSCFilter'
})
export class PipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!args){
    return null;
  }
  return value.filter((val) => {
    let rVal = (val.bankid.toLocaleLowerCase().includes(args)) || (val.ifsc.toLocaleLowerCase().includes(args))
    || (val.bankname.toLocaleLowerCase().includes(args)) || (val.branch.toLocaleLowerCase().includes(args));
    return rVal;
  })
}
}
