const contactModule = function(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    let phone = document.createElement("p");
    phone.textContent = "Call us at 555-555-555 to make reservation or place a takeout order";
    let email = document.createElement("p");
    email.textContent = "For any question please write at sampleemail@samplemail.com";
    content.appendChild(phone);
    content.appendChild(email);
    console.log("Contact");
}
export { contactModule }