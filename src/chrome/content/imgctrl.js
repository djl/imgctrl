window.addEventListener("load", function(event) {
    var menu = document.getElementById("contentAreaContextMenu");
    menu.addEventListener("popupshowing", setupMenuItems, false);
}, false);

function setupMenuItems(event) {
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