function maior (a, b, c) {
    if ( a > b  && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}



function menor (a, b, c) {
    var r = a < b && a < c ? a : b < a && b < c ? b : c;
    return r;
}

function formataMes (mes){
    switch (mes){
      case 1:
        console.log("JANEIRO");
        break;
      case 2:
       console.log("FEVEREIRO");
       break;  
      case 3:
        console.log("MARÇO");
        break;
       case 4:
       console.log("ABRIL");
       break;  
    default:
        console.log("Não implementei ainda");  
    }
}