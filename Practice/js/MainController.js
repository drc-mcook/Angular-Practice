//Dependency injection is fancy name for something that we can ask for dependancys for, we ask for it my passing it into the function
//If we don't ask for it as a parameter in the function, it will throw as error because angular doesn't know about it
function MainController() {
    this.likesList = [];
    this.addToLikes = function (movie){
        this.likesList.push(movie);
    }
    this.unlike = function (index) {
        this.likesList.splice(index, 1);
    }
    //Since we used the as syntax in our html, we can now get rid of the $scope keyword and use the this keyword
    this.name = 'Matt';
    this.favorites = [
    {
        title:'The Hobbit',
        year: '2014',
        popular: true,
        category: 'fantasy'
    },
    {
        title:'Caddyshack',
        year: '1985',
        popular: false,
        category: 'comedy'
    },
    {
        title:'The Accountant',
        year: '2015',
        popular: false,
        category: 'thriller'
    },
    {
        title:'LOTR',
        year: '2003',
        popular: true,
    }
    ]
}
//We do this to protect against minification when it runs, a minifier would change $scope to  a single letter, than angular
//wouldn't know what a is, so using the MainController.$inject protects against that
//THe string value in the MainController.$inject cannot be minified, so were good to go
MainController.$inject=['$scope'];

angular
    .module('app')
    .controller('MainController', MainController);


//Controllers in simple terms are classes used to manage particular views or components 

