//Tworzenie dynamicznego pobierania danych IMPORTANT

'use strict';

$(function () {


    var rootUrl = 'https://jsonplaceholder.typicode.com/posts/';

    
    //Funkacja ładująca posty dynamicznie
    function getPosts(n) {



        for (var i = 1 + n; i <= 5 + n; i++) {




            $.getJSON(rootUrl + i.toString(), function (data) {
                // wyswietl w konsoli
            


                //Tworzenie znaków HTML
                var articleTag = document.createElement('article');

                var articleHeader = document.createElement('h2');
                var articleParagraph = document.createElement('p');
                var articleFooter = document.createElement('footer');

                //Władowanie tekstu w znaczniki stworzone powyżej
                $(articleHeader).text(data.title);
                $(articleParagraph).text(data.body);
                $(articleFooter).text(data.userId + ' to jest post nr: ' + data.id);



                //Dodanie znacznikow h2, p, footer do elementu article
                $(articleTag).addClass('single-post');
                $(articleTag).append(articleHeader, articleParagraph, articleFooter);

                //Wyswietlenie wszystkich elementow na stronie w znaczniku article
                $('#posts-list').append(articleTag);



            }).done(function(data){
                
            });

        }
    }

    $('#get_posts').click(function () {
        //liczymy ile jest postów
        var postCount = $('.single-post').length;
        
        
        getPosts(postCount);

    })

    getPosts(0);
});
