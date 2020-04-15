const menuModule = function(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    let pizza = document.createElement("p");
    
    pizza.textContent = "Pizza";
    content.appendChild(pizza);
    console.log("Menu");

}
export { menuModule }