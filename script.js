//// Minor bits and bobs for antonyfb.com
//

// Theme switcher

function makeLight() {
    document.body.style.backgroundColor = '#f9f5d7';
    document.body.style.color = '#282828';
    localStorage.afTheme = 'light';
}

function makeDark() {
    document.body.style.backgroundColor = '#282828';
    document.body.style.color = '#ebdbb2';
    localStorage.afTheme = 'dark';
}

if (localStorage.afTheme === 'light') {
    makeLight();
}

function changeTheme() {
    if (localStorage.afTheme === 'light') {
	makeDark();
    } else {
	makeLight();
    }
}

const themeButton = document.querySelector('#themeButton');
themeButton.addEventListener("click", changeTheme);
