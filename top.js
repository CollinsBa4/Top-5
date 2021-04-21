var app = angular.module("FamousList",[]);

app.controller("composerController", function($scope) {
    $scope.pieces = [
        {"pic" : "/Top 5/images/licensed-image.jpeg", "composer": "Bach", "title": "Genesis"},
        {"pic" : "/Top 5/images/licensed-image.jpeg", "composer": "Bach", "title": "Exodus"},
        {"pic" : "/Top 5/images/licensed-image.jpeg", "composer": "Bach", "title": "Leviticus"},
        {"pic" : "/Top 5/images/licensed-image.jpeg", "composer": "Bach", "title": "Numbers"},
        {"pic" : "/Top 5/images/licensed-image.jpeg", "composer": "Bach", "title": "Deuteronomy"},
        {"pic" : "/Top 5/images/194048_v9_ba.jpg", "composer": "Beethoven", "title": "Joshua"},
        {"pic" : "/Top 5/images/194048_v9_ba.jpg", "composer": "Beethoven", "title": "Judges"},
        {"pic" : "/Top 5/images/194048_v9_ba.jpg", "composer": "Beethoven", "title": "Ruth"},
        {"pic" : "/Top 5/images/194048_v9_ba.jpg", "composer": "Beethoven", "title": "Ezra"},  
        {"pic" : "/Top 5/images/194048_v9_ba.jpg", "composer": "Beethoven", "title": "Nehemiah"},
        {"pic" : "/Top 5/images/188667_v9_ba.jpg", "composer": "Mozart", "title": "Esther"},
        {"pic" : "/Top 5/images/188667_v9_ba.jpg", "composer": "Mozart", "title": "Job"},
        {"pic" : "/Top 5/images/188667_v9_ba.jpg", "composer": "Mozart", "title": "Psalm"},
        {"pic" : "/Top 5/images/188667_v9_ba.jpg", "composer": "Mozart", "title": "Proverbs"},
        {"pic" : "/Top 5/images/188667_v9_ba.jpg", "composer": "Mozart", "title": "Ecclesiastes"}



    ]
});