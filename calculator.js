
function myfunction(){
    var x=prompt("1. Add\n2.Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit");
    if(isNaN(x)){
     alert("please enter a number 1 to 7");
     x=prompt("1. Add\n2.Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit");
    }
     else if(x=="1"){
                   var a= prompt("Enter first Number");
                   var b= prompt("Enter second Number");
                   var c = parseInt(a) + parseInt(b);
                   document.getElementById("result").value = c;

     }else if(x=="2"){
                   var a= prompt("Enter first Number");
                   var b= prompt("Enter second Number");
                   var c = parseInt(a) - parseInt(b);
                   document.getElementById("result").value = c;

     }else if(x=="3"){
                   var a= prompt("Enter first Number");
                   var b= prompt("Enter second Number");
                   var c = parseInt(a) * parseInt(b);
                   document.getElementById("result").value = c;

     }else if(x=="4"){
                   var a= prompt("Enter first Number");
                   var b= prompt("Enter second Number");
                   var c = parseInt(a) / parseInt(b);
                   document.getElementById("result").value = c;

     }else if(x=="5"){
                   var a= prompt("Enter the Base");
                   var b= prompt("Enter the Power");
                   var c = Math.pow(parseInt(a),parseInt(b));
                   document.getElementById("result").value = c;
    }
    else if(x=="6"){
    var  d2= prompt("enter number");
        var arr =[];
        total = 0;
         var i=0;
                    while(!d2.includes("***")){
                  
                   arr[i]=d2;
                    //  alert(arr[i] + "value of i is:"+i);
                   total =parseInt(total) + parseInt(arr[i]);
                   i++;
                   d2= prompt("Enter Number");
                    }
                  //   alert(i);
                   //  alert(total);
                     c= total/i;    
                   
                   document.getElementById("result").value = c;
}      else if(x==7){
               window.stop();
       }
}
