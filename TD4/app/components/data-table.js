import Component from '@ember/component';

export default Component.extend({
  actions:{
    delete(object){
      object.destroyRecord();
    }
  }
});
