
function solve(input){

    let shelves = [];

    for(const row of input){
        const shelfCommand = " -> ";

        if (row.includes(shelfCommand)) {
            let [id, genre] = row.split(shelfCommand); 

            if (!shelves.find(x => x.id === id)) {
                let shelf = {
                    id,
                    genre,
                    books: []
                };
    
                shelves.push(shelf);
            }
            
        }
        else {
            let [bookTitle, info] = row.split(": ");
            let [bookAuthor, bookGenre] = info.split(", ");

            let book = {
                bookTitle,
                bookAuthor,
                bookGenre
            };

            shelves.forEach(shelf => {
                if (shelf.genre === bookGenre) {
                    shelf.books.push(book);
                }
            })
        }
    }

    shelves.sort((a, b) => b.books.length - a.books.length).forEach(shelf => { 
        console.log(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);

        for(const book of shelf.books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle))){
            console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
        }
    });
}

solve(['1 -> history',
'1 -> action',
'Death in Time: Criss Bell, mystery',
'2 -> mystery',
'3 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Hurting Secrets: Dustin Bolt, action',
'Future of Dawn: Aiden Rose, sci-fi',
'Lions and Rats: Gabe Roads, history',
'2 -> romance',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi',
'Pilots of Stone: Brook Jay, history'])

console.log("_-------------------");

solve(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi'])