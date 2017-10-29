var myApp = angular.module('myApp', []);

myApp.controller('picController', function () {
    var pic = this;
    
    pic.showPictures = true;
    pic.message = 'show pics!';

    pic.display = function (picture) {
        // person.show = !person.show;
        console.log(pic.name);
        console.log(pic.file);
        picture = pictures.push({ name: pic.name, file: pic.file});
    }


    var pictures = [{ name: 'image1', file: '/images/pug1.jpg'},
    {name: 'image2', file: '/images/pug2.gif'}];
    
    

    pic.pictures = pictures;


});