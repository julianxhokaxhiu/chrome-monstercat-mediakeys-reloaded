chrome.commands.onCommand.addListener(function(command){
	chrome.tabs.query({
        url: '*://*.monstercat.com/*'
    }, function(tabs){
        chrome.tabs.sendMessage( tabs[0].id, {
            action: command
        });
    })
});
