import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', onPlayerTimeUpdate, 1000);

function onPlayerTimeUpdate(time){
    const currentTime = time.seconds;

    localStorage.setItem('videoplayer-current-time', currentTime);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
