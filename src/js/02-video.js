import * as _ from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video');
});

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', _.throttle(data => { localStorage.setItem("videoplayer-current-time", data.seconds.toString()); }, 1000),);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});