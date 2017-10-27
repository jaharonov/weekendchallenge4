var myApp = angular.module('myApp', []);

picApp.controller('PicController', function (){
    var pic = this;
    console.log(pic);
    pic.showPictures = true;
    pic.message = 'Show some pictures!';

    pic.myPics = function(image) {
        console.log(pic.name);
        console.log(pic.file);
        pictures.push({name: pic.name, file: pic.file});
    }

    var pictures = [{name: 'image1', file: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwiQzofv1pHXAhUHwYMKHcnOAJgQjRwIBw&url=https%3A%2F%2Ftopdogtips.com%2Fbest-dog-food-for-pugs%2F&psig=AOvVaw1CETdFkvmoPsulYRBblT33&ust=1509223755458956'},
        { name: 'image2', file: }


    ]

})