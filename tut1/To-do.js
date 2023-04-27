window.onload = () => {
    const form1 = document.querySelector("#Form");

    let items = document.querySelector("items");
    let submit = document.querySelector("Submit");

    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

if (e.target.classList.contains("Edit")) {
    document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
    submit.value = "Edit";
    editItem = e;
}

function addItem(e) {
    e.preventDefault();

    if (submit.value != "Submit") {
        console.log("Hello");

        editItem.target.parentNode.childNodes[0].data
            = document.querySelector("item").value;

        submit.value = "Submit";
        document.querySelector("item").value = "";

        document.querySelector("lblsuccess").innerHTML
            = "Text edited successfully";

        document.querySelector("lblsuccess")
            .style.display = "block";

        setTimeout(function () {
            document.querySelector("lblsuccess")
                .style.display = "none";
        }, 3000);

        return false;
    }
}