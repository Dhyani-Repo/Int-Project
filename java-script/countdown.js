const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomHex  = "#" + randomNumber.toString(16);
    document.getElementById("box-1").style.backgroundColor = randomHex;

    const randomNumber1 = Math.floor(Math.random() * 16777215);
    const randomHex1  = "#" + randomNumber1.toString(16);
    document.getElementById("box-2").style.backgroundColor = randomHex1;
}


document.getElementById("btn").addEventListener(

    "click",
    getcolor

)

getcolor();