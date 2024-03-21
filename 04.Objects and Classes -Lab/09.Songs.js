
function solve(input){
    const allFilter = 'all';
    class Song{

        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsToCheck = input.slice(1, input.length - 1)
    let songs = []

    for(const song of songsToCheck){

        let [type, name, time] = song.split("_");

        let currentSong = new Song(type, name, time);

        songs.push(currentSong)
    }

    let filter = input[input.length - 1];

    if(filter == allFilter){
        songs.forEach(song => {
            console.log(song.name);
        });
    }
    else{
        songs.filter(song => song.typeList === filter).forEach(song => {
            console.log(song.name);
        });
    }
    
}

solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])