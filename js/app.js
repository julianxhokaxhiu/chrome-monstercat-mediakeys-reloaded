chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    var click_event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    switch(request.action){
        case 'NEXT-MK':
            document.getElementsByClassName('fa-step-forward')[0].dispatchEvent(click_event);
            break;
        case 'PREV-MK':
            document.getElementsByClassName('fa-step-backward')[0].dispatchEvent(click_event);
            break;
        case 'STOP-MK':
            if ( document.getElementsByClassName('fa-pause').length > 0 )
              document.getElementsByClassName('fa-pause')[0].dispatchEvent(click_event);
            break;
        case 'PLAY-PAUSE-MK':
            if ( document.getElementsByClassName('fa-play').length > 0 )
                document.getElementsByClassName('fa-play')[0].dispatchEvent(click_event);
            else
                document.getElementsByClassName('fa-pause')[0].dispatchEvent(click_event);
            break;
    }
});
