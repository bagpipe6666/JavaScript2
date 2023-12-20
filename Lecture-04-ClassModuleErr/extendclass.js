class media {
    constructor(info) {
        
        this.name = info.name;
        this.publishDate = info.publishDate;
    }
}

class song extends media {
    constructor(songDate) {
        super(songDate);
        this.artist = songDate.artist;
    }
}

const mySong = new song({
    artist: "Three Man Down",
    name: "ข้างกัน",
    publishDate: 2020
});

console.log(mySong);