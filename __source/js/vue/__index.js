/*******************************************
* BEGINNER APPLICATION
*******************************************/

//Define the search component
Vue.component('searchbar', {
  props: ['search'],
  template: `
    <section class="searchbar">
      <input name="college-search" placeholder="Type a name..." v-on:keyup="updateSearch($event.target.value)" type="text" value="">
    </section>
  `,
  methods: {
    updateSearch: function(value){
      this.search = value;
      this.$emit('input', value);
    }
  }
});

//Define the school component
Vue.component('school', {
  props: ['color', 'name', 'mascot', 'conference', 'division', 'city', 'state'],
  template: `
    <div class="school">
      <h1 v-bind:style="{background: color}">{{this.htmlEntities(name)}}</h1>
      <ul>
        <li><span>Mascot:</span><span class="values">{{this.htmlEntities(mascot)}}</span></li>
        <li class="two-lines"><span>Conference:</span><span class="values">{{this.htmlEntities(conference)}}</span></li>
        <li><span>Division:</span><span class="values">NCAA Division {{this.htmlEntities(division)}}</span></li>
        <li><span>City:</span><span class="values">{{this.htmlEntities(city)}}</span></li>
        <li><span>State:</span><span class="values">{{this.htmlEntities(state)}}</span></li>
      </ul>
    </div>
  `,
  methods: {
    htmlEntities: function(str){
      var txt = document.createElement('textarea');
      txt.innerHTML = str;
      return txt.value;
    }
  }
});

//Define the main app and target the id app-holder
var app = new Vue({
  el: '#app-holder',
  data: {
    showSchools: [],
    masterSchools: [],
    search: "",
    isLoading: true
  },
  methods: {
    getSchools: function(){
      var search = this.search;
      const schoolsUpdated = this.masterSchools.filter(function(school) {
        if(school.name.toLowerCase().search(search.toLowerCase()) > -1 || school.fullName.toLowerCase().search(search.toLowerCase()) > -1) return true;
        return false;
      });
      this.showSchools = schoolsUpdated;
    }
  },
  watch: {
    search: function(){
      this.getSchools();
    }
  }
});

//Call the API to gather initial data
fetch('https://apis.claytonkreisel.com/ncaa/v1/schools/?key=123456789012345&school_name=', {
  method: 'GET'
})
.then(function(res) {
  return res.json();
})
.then(
  function(result) {
    if(result.success){
      const schoolComponents = result.data.schools.map(function(school) {
        return {
          id: school.id,
          mascot: school.mascot,
          division: school.division,
          city: school.city,
          state: school.state,
          color: school.primary_color,
          name: school.name,
          fullName: school.full_name,
          conference: school.conference_name
        }
      });
      app.showSchools = schoolComponents;
      app.masterSchools = schoolComponents;
      app.isLoading = false;
    }
  }
);
