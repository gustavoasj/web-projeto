(function () {
    var app = angular.module('news', []);
    app.controller('DateController', function () {
        this.day = 'domingo';
        this.numday = 4;
        this.month = 'janeiro';
        this.year = 2015;
    });


    app.controller('ContentController', function (){
        this.posts = singlePost;
        this.lastpost = singlePost[0];
        
        this.islastpost = function(){
            this.lastpost = singlePost[0];
        };
        this.islastcategorypost = function(category){
            for(i=0; i<singlePost.length;i++){
                if(singlePost.category === category){
                    this.lastpost = singlePost[i];
                }
            }
        };
    });

    
    var singlePost = [
        {
            title: "Titulo",
            subtitle: "subtitle",
            description: "Bla bla bla",
            images:["images/1/2.jpg"],
            category: "Tecnologia",
            likes: 6,
            comments: [],
            date: "4/01/2015",
            link: "/post"
        }
    ];
})();