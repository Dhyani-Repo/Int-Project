const endDate = "20 March 2024 18:00 ";

document.getElementById("para-2").innerText = endDate;

const inputs = document.querySelectorAll("input")

function clock(){

    const end = new Date(endDate);
    const newDate = new Date();

    const Diff = newDate-end;
    
    inputs[0].value = Math.floor(Diff/(1000*3600*24))
    inputs[1].value = Math.floor((Diff/(1000*3600))%24)
    inputs[2].value = Math.floor((Diff/(1000*60))%60)
    inputs[3].value = Math.floor((Diff/(1000))%60)

}

setInterval(
    () => {
        clock();
    },1000
)



