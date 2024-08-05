interface AudioPlayer{
    audioVolume: number;
    soundDuration: number;
    sound: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soundDuration: 36,
    sound: "Mess",
    details: {
        author: "Ed Sheeran",
        year : 2015
    }
};

const sound = 'new song';

const { sound: anotherSong, soundDuration: duration, details } = audioPlayer
const { author } = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author)


const [,,p3, p4='Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log(p3);
console.log(p4);




export { };