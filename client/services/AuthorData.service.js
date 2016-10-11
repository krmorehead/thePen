(function () {
    'use strict';

    angular.module('thePen.AuthorData',[])
        .factory("AuthorData", AuthorData);


    function AuthorData(LocalStorage, Settings) {
        var factory = {
            getPageData: getPageData,
            getAuthorData: getAuthorData,
            updateAuthorData: updateAuthorData
        };
        // default AuthorData
        var AuthorData = {
            displayName: 'Kyle',
            pages: [
                {
                    pageName: "Home",
                    data: {

                    },
                    settings: {

                    },
                    slug: 'home'
                },
                {
                    pageName: 'About Me',
                    data: {
                        img: "avatar/blankAvatar.png"
                    },
                    settings: {
                        body: {
                            'margin' : '5',
                            'background-color' : 'rgba(245, 241, 222, 0.8)',
                            'color': 'rgb(20,20,20)',
                            'text-shadow': '4px 4px 2px rgba(200, 200, 200, 1)',
                        }
                    },
                    slug: 'aboutMe'

                },
                {
                    pageName: 'Stories',
                    slug: 'stories'
                }, {
                    pageName: 'Blog',
                    slug: 'blog'
                }, {
                    pageName: 'News',
                    slug: 'news'
                }, {
                    pageName: 'Contact',
                    slug: 'contact'
                }
            ]
        };

        function getAuthorData(displayUrl) {
            return AuthorData;
        }

        function getPageData(slug) {
            var pageData;
            _.each(AuthorData.pages, function (page) {
                if (page.slug === slug) {
                    pageData = page;
                    return false;
                }
            })
            return pageData;
        }

        function updateAuthorData(newAuthorData) {
            _.extend(AuthorData, newAuthorData);
            return AuthorData;
        }

        return factory;
    }
})();
