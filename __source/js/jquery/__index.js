/*******************************************
* BEGINNER APPLICATION
*******************************************/

//Bind this event to after the DOM is loaded
$(document).ready(function(){

  //Bind Stuff
  bindSearchbar();

});

//Get School Template and Store
var schoolTemplate = $('#schoolTemplate').clone();
$('#schoolTemplate').remove() //Remove the template from the DOM
var masterSchools = [];
var showSchools = [];

//Load initial data
$.ajax({
  url: 'https://apis.claytonkreisel.com/ncaa/v1/schools/?key=123456789012345&school_name=',
  method: 'GET',
  dataType: 'json',
  success: function(response){
    if(response.success){
      masterSchools = response.data.schools;
      displaySchools(masterSchools);
      $('#app-holder').removeClass('is-loading');
      $('#app-holder > img').hide();
      $('.searchbar, .schools').show();
    }
  }
});

//Display Schools
function displaySchools(schools){
  $('.schools').html('');
  var html = '';
  for(var i = 0; i < schools.length; i++){
    var curSchool = schoolTemplate.clone();
    curSchool.find('[data-handle="name"]').html(htmlEntities(schools[i].name));
    curSchool.find('[data-handle="name"]').css({background: htmlEntities(schools[i].primary_color)});
    curSchool.find('[data-handle="mascot"]').html(htmlEntities(schools[i].mascot));
    curSchool.find('[data-handle="city"]').html(htmlEntities(schools[i].city));
    curSchool.find('[data-handle="state"]').html(htmlEntities(schools[i].state));
    curSchool.find('[data-handle="conference"]').html(htmlEntities(schools[i].conference_name));
    curSchool.find('[data-handle="division"]').html('NCAA Division ' + htmlEntities(schools[i].division));
    html += curSchool.html();
  }
  $('.schools').append(html);
}

//Search Master Schools
function searchSchools(search){
  var results = masterSchools.filter(function(school){
    if(school.name.toLowerCase().search(search.toLowerCase()) > -1 || school.full_name.toLowerCase().search(search.toLowerCase()) > -1) return true;
    return false;
  });
  showSchools = results;
  displaySchools(showSchools);
}

//Transform HTML Entitiies
function htmlEntities(str) {
  var txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

//Binds the searchbar event listeners
function bindSearchbar(){

  $('.searchbar input').off('keyup');
  $('.searchbar input').on('keyup', function(e){
    var value = $(this).val();
    searchSchools(value);
  });

}
