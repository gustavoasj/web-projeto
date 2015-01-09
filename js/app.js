(function () {
    var app = angular.module('news', []);
    app.controller('DateController', function () {
        this.day = 'segunda';
        this.numday = 5;
        this.month = 'janeiro';
        this.year = 2015;
    });


    app.controller('ContentController', ['$filter', function ($filter){
        var orderBy = $filter('orderBy');
        this.posts = singlePost;
        this.posts = orderBy(this.posts, '-views', false);
        this.lastpost = singlePost[0];
        this.predicate = 'views';
        this.islastpost = function(){
            this.lastpost = singlePost[0];
        };
        this.islastcategorypost = function(category){
            for(i=0; i<singlePost.length;i++){
                if(singlePost.category === category){
                    //lastpost = singlePost[i];
                    break;
                }
            }
        };
        
        
        
    }]);
    
    app.controller('viewsController', ['$filter', function ($filter){
        var orderBy = $filter('orderBy');
        this.posts = singlePost;
        this.posts = orderBy(this.posts, '-views', false);
        
    }]);

    app.controller('popularController', ['$filter', function ($filter){
        var orderBy = $filter('orderBy');
        this.posts = singlePost;
        this.posts = orderBy(this.posts, '-comments', false);
        
    }]);
    
    var singlePost = [
        {
            id: 0,
            title: "Titulo",
            subtitle: "subtitle",
            description: "Bla bla bla",
            images:["images/1/4.jpg"],
            category: "Tecnologia",
            comments: [],
            date: "4/01/2015",
            link: "/post",
            views: 2
        },
        {
            id: 1,
            title: "Titulo2",
            subtitle: "subtitle2",
            description: "Bla bla bla",
            images:["images/1/3.jpg"],
            category: "Esporte",
            comments: ["Post ruim"],
            date: "4/01/2015",
            link: "/post",
            views: 10
        },
        {
            id: 2,
            title: "Titulo3",
            subtitle: "subtitle3",
            description: "Bla bla bla",
            images:["images/1/5.jpg"],
            category: "Cultura",
            comments: [],
            date: "4/01/2015",
            link: "/post",
            views: 8
        },
        {
            id: 3,
            title: "Titulo4",
            subtitle: "subtitle4",
            description: "Bla bla bla",
            images:["images/1/6.jpg"],
            category: "Viagem",
            comments: [],
            date: "4/01/2015",
            link: "/post",
            views: 5
        },
        {
            id: 4,
            title: "Titulo5",
            subtitle: "subtitle5",
            description: "Bla bla bla",
            images:["images/1/7.jpg"],
            category: "Politica",
            comments: [],
            date: "4/01/2015",
            link: "/post",
            views: 3
        }
    ];
})();