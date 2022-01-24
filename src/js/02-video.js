const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  console.log('onPlay');
  console.log(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
player.on('timeupdate', onPlay);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedCurrentTime = JSON.parse(currentTime);
console.log(parsedCurrentTime);

player
  .setCurrentTime(parsedCurrentTime.seconds)
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
