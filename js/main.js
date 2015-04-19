/* Main JS */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Image Gallery on xs
    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
    });

    // Initialize the Gallery as video carousel and get vidoes:
    blueimp.Gallery([
        {
            title: 'Arkansas Aerials Spring',
            href: 'https://www.youtube.com/watch?v=MP6EGIipkqg',
            type: 'text/html',
            youtube: 'MP6EGIipkqg',
            poster: 'https://img.youtube.com/vi/MP6EGIipkqg/maxresdefault.jpg'
        },
        {
            title: 'Arkansas Aerials Summer',
            href: 'https://www.youtube.com/watch?v=hQtW4vWrjvY',
            type: 'text/html',
            youtube: 'hQtW4vWrjvY',
            poster: 'https://img.youtube.com/vi/hQtW4vWrjvY/maxresdefault.jpg'
        },
        {
            title: 'Arkansas Aerials Fall',
            href: 'https://www.youtube.com/watch?v=PEU43TD3wD8',
            type: 'text/html',
            youtube: 'PEU43TD3wD8',
            poster: 'https://img.youtube.com/vi/PEU43TD3wD8/maxresdefault.jpg'
        },
        {
            title: 'Arkansas Aerials Winter',
            href: 'https://www.youtube.com/watch?v=OYPfFJqgV5A',
            type: 'text/html',
            youtube: 'OYPfFJqgV5A',
            poster: 'https://img.youtube.com/vi/OYPfFJqgV5A/maxresdefault.jpg'
        },
        {
            title: 'Arkansas Aerials Dealership',
            href: 'https://www.youtube.com/watch?v=wzH5GyVRPWA',
            type: 'text/html',
            youtube: 'wzH5GyVRPWA',
            poster: 'https://img.youtube.com/vi/wzH5GyVRPWA/maxresdefault.jpg'
        }

    ], {
        container: '#blueimp-video-carousel',
        carousel: true,
        youTubeClickToPlay: false,
        transitionSpeed: 800
    });

});
