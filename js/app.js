(function () {
    var app = angular.module('news', []);
    app.controller('DateController', function () {
        this.day = Date.day();
        this.numday = 5;
        this.month = Date.month();
        this.year = 2015;
    });


    app.controller('ContentController', function (){
        this.posts = singlePost;
      /*  this.lastpost = singlePost[0];
        
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
        };*/
    });

    
    var singlePost = [
        {
            title: "Long Traffic Jams Occur in The City Because there is a               Demo Rising Oil Prices",
            subtitle: "subtitle",
            body: "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam el eum iriure dolor in hendrerit in vulputate velit esse molestie consequat; est usus legentis in iis qui facit eorum claritatem. Investigationes lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p><p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Mirum est notare quam littera</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>",
            images:["images/blog/1.jpg"],
            imageClass:["img-responsive"],
            imageSpan:["Example : This is image caption fo sample"],
            category: "Tecnologia",
            comments: [],
            dia:"4",
            mes:"01",
            ano:"2015",
            link: "/post",
            views: 0
        }
    ];
})();