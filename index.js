function  divisibleDelete(){

    let number = document.getElementById("divisor").value;              //.vaule becuase youre getting a value from that id
    let buttons = document.getElementsByTagName("button");                 //to be able to select buttons

    for(var i=0;i < buttons.length;i++)
    {
        if((buttons[i].innerHTML) % (number) == 0 ){
            buttons[i].remove();
            i=0;
        }

    }


}