
function solve(input){

    let users = new Set();
    let articles = {};

    for(const row of input){

        const newUserCommand = "user ";
        const newArticleCommand = "article ";

        if (row.includes(newUserCommand)) {
            let user = row.split(newUserCommand)[1];

            users.add(user);
        }
        else if(row.includes(newArticleCommand)){
            let articleTitle = row.split(newArticleCommand)[1];

            articles[articleTitle] = [];
        }
        else{

            let [userAndArticleInfo, commentInfo] = row.split(": "); 

            let [user, articleTitle] = userAndArticleInfo.split(" posts on ");
            let [commentTitle, commentContent] = commentInfo.split(", ");

            if (users.has(user) && articles.hasOwnProperty(articleTitle)) {
                articles[articleTitle].push({
                    user,
                    commentTitle,
                    commentContent
                });
            }
        }
    }

    Object.entries(articles)
        .sort(([articleA, commentsA],[articleB, commentsB]) => commentsB.length - commentsA.length)
        .forEach(([article, comments]) => {
            console.log(`Comments on ${article}`);

            for(const comment of comments.sort((a,b) => a.user.localeCompare(b.user))){
                console.log(`--- From user ${comment.user}: ${comment.commentTitle} - ${comment.commentContent}`);
            }
        })
}

solve(['user aUser123', 
'someUser posts on someArticle: NoTitle, stupidComment',
'article Books',
'article Movies',
'article Shopping',
'user someUser',
'user uSeR4',
'user lastUser',
'uSeR4 posts on Books: I like books, I do really like them',
'uSeR4 posts on Movies: I also like movies, I really do',
'someUser posts on Shopping: title, I go shopping every day',
'someUser posts on Movies: Like, I also like movies very much'])
console.log("_-------------");
solve(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])