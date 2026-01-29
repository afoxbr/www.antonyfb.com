//// Minor bits and bobs for antonyfb.com
//

// Theme switcher

const themeButt = document.createElement("button");
themeButt.setAttribute("id", "themeButton");
themeButt.textContent = "☾/☀";

const themeBox = document.querySelector("#themeBox");
themeBox.appendChild(themeButt);

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

// Blog tags

const blogButtons = document.querySelector("#blogButtons");

const tagHead = document.createElement("p");
tagHead.textContent = "Tags:";

const blogButtAll = document.createElement("button");
blogButtAll.setAttribute("id", "btall");
blogButtAll.classList.add("blogTagActive");
blogButtAll.textContent = "Show All";

const blogButtPers = document.createElement("button");
blogButtPers.setAttribute("id", "btpers");
blogButtPers.classList.add("blogTagInactive");
blogButtPers.textContent = "Personal";

const blogButtTech = document.createElement("button");
blogButtTech.setAttribute("id", "bttech");
blogButtTech.classList.add("blogTagInactive");
blogButtTech.textContent = "Technology";

const blogButtBook = document.createElement("button");
blogButtBook.setAttribute("id", "btbook");
blogButtBook.classList.add("blogTagInactive");
blogButtBook.textContent = "Reading";

const blogButtCult = document.createElement("button");
blogButtCult.setAttribute("id", "btcult");
blogButtCult.classList.add("blogTagInactive");
blogButtCult.textContent = "Culture";

blogButtons.appendChild(tagHead);
blogButtons.appendChild(blogButtAll);
blogButtons.appendChild(blogButtPers);
blogButtons.appendChild(blogButtTech);
blogButtons.appendChild(blogButtBook);
blogButtons.appendChild(blogButtCult);

var persPosts = document.querySelectorAll('.blogPers');
var techPosts = document.querySelectorAll('.blogTech');
var cultPosts = document.querySelectorAll('.blogCult');
var bookPosts = document.querySelectorAll('.blogBook');

const postArray = [persPosts, techPosts, cultPosts, bookPosts];

const blogTagAll = document.querySelector('#btall');
const blogTagPers = document.querySelector('#btpers');
const blogTagTech = document.querySelector('#bttech');
const blogTagCult = document.querySelector('#btcult');
const blogTagBook = document.querySelector('#btbook');

// I laughed at this name because I'm a child
const buttArray = [blogTagAll, blogTagPers, blogTagTech, blogTagCult, blogTagBook];

function showTag(blogTag) {
    for (var i = 0; i < blogTag.length; i++) {
	blogTag[i].classList.remove("blogTagHidden");
	blogTag[i].classList.add("conlink");
    }
}

function hideTag(blogTag) {
    for (var i = 0; i < blogTag.length; i++) {
	blogTag[i].classList.add("blogTagHidden");
	blogTag[i].classList.remove("conlink");
    }
}

function activifyButton(activeButton) {
    for (var i = 0; i < buttArray.length; i++) {
	if (buttArray[i] == activeButton) {
	    buttArray[i].classList.add("blogTagActive");
	    buttArray[i].classList.remove("blogTagInactive");
	} else {
	    buttArray[i].classList.remove("blogTagActive");
	    buttArray[i].classList.add("blogTagInactive");
	}
    }
}

blogTagAll.addEventListener("click", () => {
    for (var i = 0; i < postArray.length; i++) {
	showTag(postArray[i]);
    }
    activifyButton(blogTagAll);
});

blogTagPers.addEventListener("click", () => {
    showTag(persPosts);
    hideTag(techPosts);
    hideTag(cultPosts);
    hideTag(bookPosts);
    activifyButton(blogTagPers);
})

blogTagTech.addEventListener("click", () => {
    hideTag(persPosts);
    showTag(techPosts);
    hideTag(cultPosts);
    hideTag(bookPosts);
    activifyButton(blogTagTech);
})

blogTagCult.addEventListener("click", () => {
    hideTag(persPosts);
    hideTag(techPosts);
    showTag(cultPosts);
    hideTag(bookPosts);
    activifyButton(blogTagCult);
})

blogTagBook.addEventListener("click", () => {
    hideTag(persPosts);
    hideTag(techPosts);
    hideTag(cultPosts);
    showTag(bookPosts);
    activifyButton(blogTagBook);
})
