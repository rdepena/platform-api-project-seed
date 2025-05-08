fin.Platform.init();

//let's try this out.
var popupWindow = await fin.me.showPopupWindow({
    name: "popup-window",
    resultDispatchBehavior: 'hide',
    blurBehavior: 'hide',
    hideOnClose: true,
    focus: true,
    height: 500,
    width: 500,
    x: 300,
    y: 300,
    url: `http://localhost:5555/color-view.html`,
    additionalOptions: {
        alwaysOnTop: true,
        contextMenuOptions: {
            enabled: true,
            template: ['inspect']
        }
    }
});

window.popupWindow = await fin.Window.wrap(popupWindow.identity);


const winOption = {
    name:'child',
    defaultWidth: 300,
    defaultHeight: 300,
    url: `http://localhost:5555/color-view.html`,
    frame: true,
    autoShow: true
};
window.childWindow = await fin.Window.create(winOption);


function showWindow() {
    window.childWindow.show();
}

function hideWindow() {
    window.childWindow.hide();
}

function showPopupWindow() {
    window.popupWindow.show();
}

function hidePopupWindow() {
    window.popupWindow.hide();
}

document.querySelector('#show-window').addEventListener('click', showWindow);
document.querySelector('#hide-window').addEventListener('click', hideWindow);

document.querySelector('#show-popup').addEventListener('click', showPopupWindow);
document.querySelector('#hide-popup').addEventListener('click', hidePopupWindow);