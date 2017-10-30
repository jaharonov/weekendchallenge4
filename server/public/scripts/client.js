var myApp = angular.module('myApp', []);

myApp.controller('picController', function () {
    var pic = this;
    
    
    pic.message = 'show pics!';
    pic.display = function (picture) {
        
    var picture = pictures.push({ name: pic.name, file: pic.file, caption: pic.caption, show: pic.show});
        
    }


    var pictures = [{ name: 'image1', file: '/images/biggie_crystals.jpg', caption: "My cat, Biggie!", show: false},
    {name: 'image2', file: '/images/glacier_sunrise.jpg', caption: "Sunrise while camping at Glacier National Park.", show: false},
    { name: 'image3', file: '/images/kelley_canoe.jpg', caption: "Canoeing in Minneapolis.", show: false},
    { name: 'image4', file: '/images/lacroix.jpg', caption: "Just drinking a La Croix in the summer!", show: false},
    { name: 'image5', file: '/images/pottery.jpg', caption: "My first attempts at pottery.", show: false},
    { name: 'image6', file: '/images/with_kelley.jpg', caption: "Being a dork with Kelley.",show: false }];

    pic.showCaption = function (picture) {
       
     pic.caption = picture.caption;
        
    }
    
    

    pic.pictures = pictures;


});