import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';
import Ember from 'ember';

const Services=EmberObject.extend({
  countActive:Ember.computed('services.@each.active',function(){
    return this.get('services').filterBy('active',true).length;
  }),
  sumActive:Ember.computed('services.@each.active',function(){
    let services=this.get('services').filterBy('active',true);
    let total=0;
    services.forEach(service=>{
      total+=service.price;
    });
    return total;
  })
})

export default Route.extend({
  model() {
    return Services.create({
      services: [
        {
          "name": "Web Development",
          "price": 300,
          "active": true
        }, {
          "name": "Design",
          "price": 400,
          "active": false
        }, {
          "name": "Integration",
          "price": 250,
          "active": false
        }, {
          "name": "Formation",
          "price": 220,
          "active": false
        }]

    })

    },
  actions:{
    toggleActive:function(service){
      Ember.set(service,'active',!service.active);
    }
  }
})
