
var num1;
var num2;
var action;
var digit=1;

console.log(digit)
function add()
{  
    num1= document.getElementById('input').value;
    console.log(num1)
    document.getElementById('input').value = "";
    digit=2;
    action='add';
}

function minus()
{
    num1= document.getElementById('input').value;
    document.getElementById('input').value = "";
    digit=2;
    action='minus';
}

function mult()
{
    num1= document.getElementById('input').value;
    document.getElementById('input').value = "";
    digit=2;
    action='mult';
}

function division()
{
    num1= document.getElementById('input').value;
    document.getElementById('input').value = "";
    digit=2;
    action='division';
}

function equals()
{
    num1=parseInt(num1,10)
    num2= parseInt(document.getElementById('input').value,10);

    console.log(num1)
    
    if (action=='add')
    {
        var value=(num1+num2);
        value=value
    }

    if (action=='minus')
    {
        var value=(num1-num2);
        value=value
    }

    if (action=='mult')
    {
        var value=(num1*num2);
        value=value
    }

    if (action=='division')
    {
        var value=(num1/num2);
        value=value
    }

    document.getElementById('input').value = value;

    digit=3


}


function clear()
{
    document.getElementById('input').value = "";
}


function zero()
{
    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"0";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"0";
    }

}

function one()
{
    if (digit==3)
    {
        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"1";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"1";
    }
}

function two()
{
    if (digit==3)
    {

        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"2";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"2";
    }
}

function three()
{
    if (digit==3)
    {

        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"3";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"3";
    }
}

function four()
{
    if (digit==3)
    {

        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"4";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"4";
    }
}

function five()
{
    if (digit==3)
    {

        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"5";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"5";
    }
}

function six()
{
    if (digit==3)
    {
        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"6";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"6";
    }
}

function seven()
{
    if (digit==3)
    {

        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"7";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"7";
    }
}

function eight()
{
    if (digit==3)
    {

        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"8";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"8";
    }
}

function nine()
{    
    if (digit==3)
    {

        digit=1
        document.getElementById('input').value = "";
    }

    if (digit==1)
    {
        num1= document.getElementById('input').value;
        document.getElementById('input').value = num1+"9";
    }
    if(digit==2)
    {
        num2= document.getElementById('input').value;
        document.getElementById('input').value = num2+"9";
    }
}







document.getElementById('plus').addEventListener('click',add);
document.getElementById('minus').addEventListener('click',minus);
document.getElementById('mult').addEventListener('click',mult);
document.getElementById('division').addEventListener('click',division);
document.getElementById('equals').addEventListener('click',equals);
document.getElementById('clear').addEventListener('click',clear);

document.getElementById('0').addEventListener('click',zero);
document.getElementById('1').addEventListener('click',one);
document.getElementById('2').addEventListener('click',two);
document.getElementById('3').addEventListener('click',three);
document.getElementById('4').addEventListener('click',four);
document.getElementById('5').addEventListener('click',five);
document.getElementById('6').addEventListener('click',six);
document.getElementById('7').addEventListener('click',seven);
document.getElementById('8').addEventListener('click',eight);
document.getElementById('9').addEventListener('click',nine);