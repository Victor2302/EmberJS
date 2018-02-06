import { helper } from '@ember/component/helper';

export function plural(params/*, hash*/) {
  let [count, zero, one, other]=params;
  let result='1 '+one;
  if(count==0){
    result = zero;
  }
  else if(count>1){
    result=count + ' ' + other;
  }
  return result;
}

export default helper(plural);
