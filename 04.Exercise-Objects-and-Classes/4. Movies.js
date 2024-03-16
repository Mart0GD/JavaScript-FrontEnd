
function solve(input){

    let moviesInfo = [];

    for(const sentence of input){

        checkAction(sentence, moviesInfo);
    }

    moviesInfo.forEach(movie => {
        let entries = Object.keys(movie);

        if (entries.length === 3) {
            console.log(JSON.stringify(movie));
        }
    });
        
    function checkAction(row, moviesInfo){

        const addCommand = 'addMovie ';
        const directorCommand = ' directedBy ';
        const dateCommand = ' onDate ';

        if ((row.includes(addCommand))) {
            [movieName] = row.split(addCommand).filter(x => x.length != 0);

            moviesInfo.push(({name: movieName}));
        }
        else if ((row.includes(directorCommand))) {
            [movieName, director] = row.split(directorCommand);

            movie = moviesInfo.find(movie => movie.name === movieName);
            movie ? movie['director'] = director : null;
        }
        else{
            [movieName, date] = row.split(dateCommand);

            movie = moviesInfo.find(movie => movie.name === movieName);

            movie ? movie['date'] = date : null;
        }
    }
}


solve([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ]);