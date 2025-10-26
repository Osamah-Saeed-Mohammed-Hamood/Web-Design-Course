function calcDays(age)
{
    "use strict";
    let year=365;
    return age*year;
}

let dynamicAge=window.prompt("كم عمرك ؟");
alert("عمرك بالايام هو : "+calcDays(dynamicAge));
(function funwelcome(){
    alert("Welcome in my website..........");
}());

function convertDollarToRial()
{
    let amount = document.getElementById("Dollar").value,
    resultShow=document.getElementById("convertresult"),
    message=document.getElementById("message")
    if(amount ===" ")
    {
        message.innerHTML="هذا الحقل لا يمكن ان يكون فارغ.....";
    }
    else if (amount ===0)
    {
        message.innerHTML="القيمة لا يمكن ان تكون صفر";
    }
    else if (amount <0)
    {
        message.innerHTML="القيمة لا يمكن ان تكون سالبة";
    }
    else{
        resultShow.innerHTML=amount+"دولار"+amount*535+"ريال يمني";
    }
}

function convertDollarToRia2()
{
    let curency=document.getElementById("currency");
    let amount=document.getElementById("mony").value,
    kind = curency.value,
    resultShow=document.getElementById("convertresult2"),
    message=document.getElementById("message2");
    if (amount == " ")
    {
              message.innerHTML="هذا الحقل لا يمكن ان يكون فارغ.....";
    }
    else if (amount ===0)
    {
       message.innerHTML="القيمة لا يمكن ان تكون صفر";
    }
    else if (amount <0)
    {
       message.innerHTML="القيمة لا يمكن ان تكون سالبة";
    }
   else
   {
       resultShow.innerHTML="="+(kind*amount)+"ريال يمني";
   }
}