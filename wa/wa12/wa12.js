let myData = {};

function fetchData(){
    fetch('https://corsproxy.io/?https://xkcd.com/614/info.0.json')


        .then(res =>{
            myData = res;
            console.log(myData);

            //title
            document.getElementById("title").src

            //display comic
            document.getElementById("comic").src = myData.img;

            // alt text
        })


}


fetchData();