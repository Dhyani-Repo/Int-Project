const QuestionBank = [
    {
        que:"Which one of them is a markup language ?",
        a: "HTML",
        b: "Java",
        c: "PHP",
        d : "Python",
        correct : "a",
    },
    {
        'que':"Which one of them is a programming language ?",
        'a': "HTML",
        'b': "css",
        'c': "tailwind",
        'd' : "Python",
        'correct' : "d",
    },
    {
        'que':"Which one of them is a robust language ?",
        'a': "c++",
        'b': "Java",
        'c': "PHP",
        'd' : "Python",
        'correct' : "b",
    }
]

let index = 0;
const  QueBox= document.getElementById("para");
const inputs = document.querySelectorAll("input");
const LoadQuestion = () => {
    const data = QuestionBank[index];
    console.log(data);
    QueBox.innerText = data.que;

    inputs[0].nextElementSibling.innerText = data.a;             
    inputs[1].nextElementSibling.innerText = data.b;             
    inputs[2].nextElementSibling.innerText = data.c;             
    inputs[3].nextElementSibling.innerText = data.d;             
  
}
document.getElementById("btn").addEventListener('click',nextQuestionPlease)

function nextQuestionPlease(){
    index++;
    if(index < QuestionBank.length ){
        LoadQuestion();
    }else{
        document.getElementById("btn").innerText = "Done";
    }
}

LoadQuestion();     




