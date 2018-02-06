import Route from '@ember/routing/route';


export default Route.extend({
  model(){
    return {
      name: "M. SMITH",
      skills: ["emberJS", "React", "PHP", "Java"]
  }

  }
});
