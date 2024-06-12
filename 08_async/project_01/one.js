const generatecolor = () => {
    const hex = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let id;
document.getElementById("start").addEventListener("click", () => {
    function changeColor() {
        document.body.style.backgroundColor = generatecolor();
    }
   id = setInterval(changeColor, 1000)
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(id);
    id = null;
 });

 // make a good project check all objects is null or not and use them
 