let my_var = 100;
var my_other_var = "hello world";
console.log(my_other_var);

alert("this is an alert");

// how to interact with the DOM

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML = "this is the new text";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image".src = "images/unicorns/univorn(2).png")
})


console.log(document.getElementById("my_head").innerHTML);