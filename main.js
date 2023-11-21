

function valid(){

    var price=parseInt(document.forms["billform"]["rate"].value);   
    var x=price*(3/100);

    document.forms["billform"]["wgst"].value =x;
    var total=parseInt(price+x);
    document.forms["billform"]["tota"].value=total+"/-";
    
    return false;

    

}