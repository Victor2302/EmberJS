import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr('string'),
  description:DS.attr('string'),
  dateDebut:DS.attr('date'),
  dateRendu:DS.attr('date'),
  proprietaire:DS.belongsTo('developer')
});
