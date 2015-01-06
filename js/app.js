(function () {
    var app = angular.module('news', []);
    app.controller('DateController', function () {
        this.day = 'segunda';
        this.numday = 5;
        this.month = 'janeiro';
        this.year = 2015;
    });


    app.controller('ContentController', function (){
        this.posts = singlePost;
        this.lastpost = singlePost[0];
        
        this.islastpost = function(){
            return lastpost;
        };
        this.islastcategorypost = function(category){
            for(i=0; i<singlePost.length;i++){
                if(singlePost.category === category){
                    this.lastpost = singlePost[i];
                    break;
                }
            }
        };
    });

    
    var singlePost = [
        {
            title: "Long Traffic Jams Occur in The City Because there is a Demo Rising Oil Prices",
            subtitle: "subtitle",
            body: "",
            images:["images/blog/1.jpg"],
            imageClass:["img-responsive"],
            imageSpan:["Example : This is image caption fo sample"],
            category: "Tecnologia",
            comments: [],
            date: "4/01/2015",
            link: "/post",
            views: 0
        }
    ];
})();