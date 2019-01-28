/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sweet but Pyscho", "Way Back Home", "Walking the Wire", "FRIENDS"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above

var image =["https://direct.rhapsody.com/imageserver/images/Alb.341008372/500x500.jpg", "https://i.ytimg.com/vi/q2OvqFbzLEE/hqdefault.jpg", "https://c-sf.smule.com/sf/s79/arr/13/42/f58421a2-c2e7-4f96-8358-d034ed8c2c9f.jpg", "https://i.ytimg.com/vi/CY8E6N5Nzec/maxresdefault.jpg"];

var artists = ["Ava Max", "SHAUN", "Imagine Dragons", "Marshmello & Anne-Marie"];

var lengths = ["3:328", "3:20", "3:52", "3:26"];

var links = ["https://youtu.be/zBGrpqMf1eY", "https://youtu.be/eNt78mQJavY", "https://youtu.be/hdpWFhqQNNs", "https://youtu.be/CY8E6N5Nzec"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    
    image.forEach(function(picture) {
        $("#images").append("<img src=" + picture + ">");
    });
    
    songs.forEach(function(song){
        $("#songs").append("<p>" + song + "</p>");
    });
    
    artists.forEach(function(singer){
        $("#artists").append("<p>" + singer +"</p>");
    });
    
    lengths.forEach(function(minutes) {
        $("#lengths").append("<p>" + minutes + "</p>");
    });
    
    links.forEach(function(link){
       $("#links").append("<p>" + link + "</p>"); 
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#lengths").empty();
    $("#artists").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    
    var songsAdded = $("#song").val();
    songs.push(songsAdded);
    
    var newImages = $("#image").val();
    image.push(newImages);
    
    var otherArtists = $("#artist").val();
    artists.push(otherArtists);
    
    var newLinks = $("#link").val();
    links.push(newLinks);
    
    var newLengths = $("#length").val();
    lengths.push(newLengths);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
