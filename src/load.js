const load = function(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    let logo = document.createElement("IMG");
    let byLine = document.createElement("h1");
    let description = document.createElement("p");
    logo.setAttribute("src", "../src/logo.jpg");
    logo.id = "logo";
    logo.width = "300";
    byLine.textContent = "Best restaurant ever";
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    content.appendChild(logo);
    content.appendChild(byLine);
    content.appendChild(description);
}
    export { load }

