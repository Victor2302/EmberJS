import Route from '@ember/routing/route';
import Object from '@ember/object';

export default Route.extend({
  model(){
    return this.get(Object);
  },
  actions:{
    modifier:function(data){

    }
  }
});
