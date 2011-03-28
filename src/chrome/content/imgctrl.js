window.addEventListener("load", function(event) {
    var menu = document.getElementById("contentAreaContextMenu");
    if (menu) {
        menu.addEventListener("popupshowing", imgcrtlInit, false);
    }
}, false);

function imgcrtlInit(event) {
    var menuItems = ['window', 'tab'];
    for (var i=0; i < menuItems.length; i++) {
        var item = document.getElementById('imgctrl-' +  menuItems[i]);
        item.hidden = !gContextMenu.onImage;
    }
}

function imgctrl(where) {
    var url = gContextMenu.imageURL || gContextMenu.mediaURL;
    switch(where) {
    case "window":
        window.open(url);
        break;
    default:
        window.getBrowser().addTab(url);
    }
}