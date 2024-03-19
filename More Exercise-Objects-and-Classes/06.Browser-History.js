
function solve(browser, actions){

    actions.forEach(command => {
        executeCommand(command, browser);
    })

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);;
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);

    
    function executeCommand(command, browser){
        const closeCommnad = "Close ";
        const openCommand = "Open ";
        const clearEverything = "Clear History and Cache";

        if (command === clearEverything) {
            for(const key of Object.keys(browser)){
                if (key == "Browser Name") continue;

                browser[key] = [];
            }
            return;
        }
        else if (command.includes(openCommand)) {
            let tab = command.split(openCommand)[1];

            browser["Open Tabs"].push(tab);
            browser["Browser Logs"].push(command);
        }
        else{
            let tabForLookOut = command.split(closeCommnad)[1];
            let isOpen = browser["Open Tabs"].find(x => x === tabForLookOut);

            if (isOpen) {
                browser["Open Tabs"].splice(browser["Open Tabs"].indexOf(tabForLookOut),1);
                browser["Recently Closed"].push(tabForLookOut);
                browser["Browser Logs"].push(command);
            }

        }

        
    }
}


// solve({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
// "Recently Closed":["Yahoo","Gmail"],
// "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
// ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )
// console.log("-----------------------");
solve({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Clear History and Cache", "Close Gmail"]
)