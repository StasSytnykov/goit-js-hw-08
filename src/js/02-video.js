const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {});

player.getVideoTitle().then(function (title) {});

const onPlay = _.throttle(function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}, 1000);

player.on('timeupdate', onPlay);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedCurrentTime = JSON.parse(currentTime);
const parsedCurrentSeconds = parsedCurrentTime !== null ? parsedCurrentTime.seconds : 0;

player
  .setCurrentTime(parsedCurrentSeconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
