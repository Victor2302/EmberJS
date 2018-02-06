import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

const Note = EmberObject.extend({
  size : computed('content', function(){
    if(this.get('content').length > 0) {
      this.set('info','Note modifiée');
      this.set('styleNote', 'alert-info');
      this.set('alertVisible',true);
    }
    return this.get('MAX')-this.get('content').length;
  }),
  style : computed('size', function(){
    if(this.get('size') < 49 && this.get('size') > 20 ){
      return 'alert-warning';
    }
    else if(this.get('size') < 21 ){
      return 'alert-danger';
    }
    else return 'alert-info';
  })



});

export default Route.extend({
  model() {
    return Note.create({
        MAX : 100,
        content:'',
        info :'',
        alertVisible:false
      });
    },
    actions:{
      delete:function(model){
        model.set('content', '');
        model.set('alertVisible', false)
      },
      save:function(model){
        model.set('styleNote', 'alert-success');
        model.set('info', `Note sauvegardée : <b>${model.get('content')}</b>`);
      }
    }
});
