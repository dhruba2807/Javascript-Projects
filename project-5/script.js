const inputbx = document.getElementById("input-box");
const listcontainer = document.getElementById("list_container");


function addtask() {
        if(inputbx.value === ''){
            alert("You Must Write Something in the box")
        }
        else{
            let li = document.createElement("li")
            li.innerHTML = inputbx.value;
            listcontainer.appendChild(li)


            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputbx.value ="";
        savedata();

}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false)

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showlist(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showlist();
