

if (Meteor.isClient) {



Template.research.onRendered(function () {
 

$('#partition').hide();
$('#arrowpa').hide();
$('#arrowpb').show();

$('#clickp').click(function(){
    var link = $(this);
    $('#partition').slideToggle('slow', function() {
        if ($(this).is(':visible')) {
            link.html('Collapse the details on the <b>default partition study</b> (with Gretchen Chapman)');
            $('#arrowpa').show();
            $('#arrowpb').hide();                   
        } else {
            link.html('Expand the details on the <b>default partition study</b> (with Gretchen Chapman)');
            $('#arrowpa').hide();
            $('#arrowpb').show();                
        }        
    });       
});


$('#dicgame').hide();
$('#arrowdga').hide();
$('#arrowdgb').show();
 
$('#clickdg').click(function(){
    var link = $(this);
    $('#dicgame').slideToggle('slow', function() {
        if ($(this).is(':visible')) {
            link.html('Collapse the details on the <b>partition dictator game study</b> (with Alex Imas and Gretchen Chapman)');
            $('#arrowdga').show();
            $('#arrowdgb').hide();                   
        } else {
            link.html('Expand the details on the <b>partition dictator game study</b> (with Alex Imas and Gretchen Chapman)');
            $('#arrowdga').hide();
            $('#arrowdgb').show();                
        }        
    });       
});
 


  height();
});


Router.configure({layoutTemplate: 'Layout'});

Router.route('/', function () {
  this.render('home');
});

Router.route('/home', function () {
  this.render('home');
});
 
Router.route('/bio', function () {
  this.render('bio');
});
 
Router.route('/research', function () {
  this.render('research');
});
}