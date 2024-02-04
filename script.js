
// This script is used to switch between the different pages of the website
document.querySelectorAll("header ul li").forEach(function(page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    }
});

// This function is used to show the page with the given name
function showPage(pageName) {
    clearPages();
    var current_page = document.getElementById(pageName);
    current_page.style.display = "block";
}

// This function is used to hide all the pages
function clearPages() {
    var pages = document.querySelectorAll("main > div");
    
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
}

showPage('page1');
