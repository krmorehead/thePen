(function () {
    'use strict';

    angular.module('thePen.AuthorData',[])
        .factory("AuthorData", AuthorData);


    function AuthorData(LocalStorage, Settings) {
        var factory = {
            getAuthorData: getAuthorData,
            updateAuthorData: updateAuthorData
        };
        // default AuthorData
        var AuthorData = {
            pages: [
                {
                    pageName: 'About Me',
                    data: {
                        img: "avatar/blankAvatar.png"
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

        function updateAuthorData(newAuthorData) {
            _.extend(AuthorData, newAuthorData);
            return AuthorData;
        }

        return factory;
    }
})();
