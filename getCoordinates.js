
var counter=0;
var array = [];

/* Will run as soon as HTML doc is loaded */
$(document).ready(function() {
    console.log("First landmark is:", landmarks[0]);
});

/* Lil script runs as soon as user clicks left mouse button... */
$(function() {
  $("#test").click(function(e) {
    var offset = $(this).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);
    
    console.log("Name = ",landmarks[counter], 
                relativeX, relativeY,
                " next landmark is ", landmarks[counter+1]);
    counter++;
    array.push([landmarks[counter],relativeX, relativeY]);
  });
});


/* This should executed when user press "e" in the keyboard to 
erase a X and Y coordinate from being stored in the array */
$(function() {
  $("#erase").click(function(events) {
   console.log("removing coordinates " + array.pop() + "... done!" );
   counter--;
   console.log("Please repin landmark", landmarks[counter]);
  });
});






