var colorToggleButtonSelector = '#color-toggle-btn';

var darkColor = {
    "--bg-color": "#2e303e",
}

var lightColor = {
    "--bg-color": "#fafafa"
}

function changeColor() {
    var color_mode = document.documentElement.getAttribute('data-user-color-scheme');

    if (color_mode === "dark") {
        for (let lightColorKey in lightColor) {
            document.documentElement.style.setProperty(lightColorKey, darkColor[lightColorKey]);
        }
    } else {
        for (let darkColorKey in darkColor) {
            document.documentElement.style.setProperty(darkColorKey, lightColor[darkColorKey]);
        }

    }
}

var button = document.querySelector(colorToggleButtonSelector);
if (button) {
    // 当用户点击切换按钮时，获得新的显示模式、写入 localStorage、并在页面上生效
    button.addEventListener('click', function () {
        changeColor();
    });
}
changeColor();
