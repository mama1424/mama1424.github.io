
// interact with DOM

console.log(document.getElementById("title_head"));
document.getElementById("title_head").addEventListener("click", function(e){
    alert("you clicked the title");
    document.getElementById("title_head").innerHTML = "New Title for Page";
    document.getElementById("paragraph").style.color = "Red";
})