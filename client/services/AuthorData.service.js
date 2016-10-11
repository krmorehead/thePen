(function () {
    'use strict';

    angular.module('thePen.AuthorData',[])
        .factory("AuthorData", AuthorData);


    function AuthorData(LocalStorage, UserData) {
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
                buildAboutMePage(),
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

        function buildAboutMePage(customPage) {
            var userData = UserData.getUserData()
            customPage = customPage || {};
            var defaultPage = {
                pageName: 'About Me',
                pageTitle: 'About ' + userData.displayName,
                data: {
                    img: userData.profile_photo || "resources/avatars/blankAvatar.png",
                    body: "Lorem ipsum dolor sit amet, sapien incididunt vestibulum dictum libero justo, a ante in sed fusce mauris pulvinar, erat quia quis semper, mauris habitasse enim aliquam. Condimentum libero amet, pretium massa nec ante, eleifend proin ultricies aliquam varius. Venenatis sit hendrerit ante hendrerit, id eu tempus id risus vulputate, aliquet enim. Donec imperdiet pulvinar ut quibusdam magna, suspendisse turpis litora turpis, sed erat lectus ligula donec quisque enim. Aliquet ut sed orci, vitae libero elementum, purus metus in a quis diam, urna in. Metus ipsum bibendum libero duis quam, risus nullam ut nec enim, placerat vitae diam ut cras fermentum a, arcu egestas etiam elit lorem tincidunt nonummy. Non auctor eu cras sodales elementum, ut auctor harum cursus soluta, quam augue nulla neque. Vel dis scelerisque nisl, pellentesque gravida at donec lorem nibh, metus eum porttitor magna cras scelerisque, quis nec sit vel, gravida posuere amet sed vehicula eget. Eros interdum non, laoreet donec praesent vel dapibus inceptos amet, magna ipsum ut ut amet. Ac sodales vivamus arcu sit, non adipiscing montes nascetur odio. Ultrices urna neque ipsum magnis. Ornare nunc neque purus est, lectus aliquam, hendrerit suspendisse sodales etiam ad mauris, parturient nec non at, aliquam nisl magna. Nonummy rhoncus fuga eu congue, nulla a et tincidunt ultrices mi. Ut morbi nam aliquam cras eum ante, sem interdum. Ultrices eget dui mattis perspiciatis justo vel. Curabitur elit at suspendisse iaculis lacus nibh. Praesent at mollis placerat ac, magni suscipit. Ipsum ante habitant quam id hymenaeos, ultrices orci sunt nec, turpis praesent maecenas nunc sem justo. Diam ut orci volutpat ornare lobortis metus. Ante praesent suscipit ipsum aenean, tellus vestibulum augue reprehenderit, scelerisque sem, a velit tellus purus facilisi nunc magnis, ut nullam eros molestiae donec arcu. Vestibulum molestie diam dignissim sodales, viverra mauris turpis eu, vitae elit sociis. Metus ac nisl amet odio fermentum, vitae magna consectetuer mauris, donec non lorem quis odio quam, sed enim, turpis ipsum adipiscing."
                },
                settings: {
                    body: {
                        'margin' : '5',
                        'background-color' : 'rgba(245, 241, 222, 0.8)',
                        'color': 'rgb(20,20,20)',
                        'text-shadow': '4px 4px 2px rgba(200, 200, 200, 1)',
                        'min-width': '30%',
                        'max-width': '60%'
                    }
                },
                slug: 'aboutMe'
            };
            return _.extend(defaultPage, customPage);

        }

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
