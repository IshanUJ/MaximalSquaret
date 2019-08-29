//function MaxSQ(strArr) {
  //  xvalue = new Array(strArr.length + 1).fill().map
  //      (row => new Array(strArr[0].length + 1).fill(0));
  //  Maxvalue = 0;

  //  for (i = strArr.length - 1; i >= 0; i--) {
    //    for (a = strArr[0].length - 1; a >= 0; a--) {
       //     if (strArr[i][a] == '0') continue;
       //     xvalue[i][a] = Math.min(xvalue[i + 1][a],
       //         xvalue[i][a + 1],
        //        xvalue[i + 1][a + 1]) + 1;

     //       Maxvalue = Math.max(Maxvalue,
     //           xvalue[i][a]);
     //   }
   // }
 ////   return Math.pow(Maxvalue, 2);
//}
//console.log(MaxSQ(["0111", "1101", "0111"]));
//console.log(MaxSQ(["0111", "1111", "1111", "1111"]));
//console.log(MaxSQ(["10100", "10111", "11111", "10010"]));


// var a = MaxSQ(["0111", "1101", "0111"]);
// document.getElementById("demo2").innerHTML = a;
// console.log(a);

// // var b = MaxSQ(["0111", "1111", "1111", "1111"]);
// document.getElementById("demo1").innerHTML = b;
// console.log(b);

// var c = MaxSQ(["10100", "10111", "11111", "10010"]);
// document.getElementById("demo").innerHTML = c;
// console.log(c);

//document.getElementById("click").addEventListener("MaxSQ", myFunction);
        
      function createChk(obj) {
          
          var valueb=obj.value;
          
        if (obj.value !== '') {
            
            for(i=1;i<=Math.pow(obj.value,2);i++)
                {
            var br = document.createElement("br");
            var chk = document.createElement('input');  // CREATE CHECK BOX.
            chk.setAttribute('type', 'checkbox');       // SPECIFY THE TYPE OF ELEMENT.
            chk.setAttribute('id', 'prodName' + i);     // SET UNIQUE ID.
            chk.setAttribute('value', i);
            chk.setAttribute('name', 'products');

         
            container.appendChild(chk);
                    if(i==valueb)
                        {
                            container.appendChild(br);
                            valueb=Number(valueb)+Number(obj.value);
                        }
                }
                 document.getElementById("prod").value= '';   
        }
         
    }
          
          function nowCheck() {
              var count1 = 0;
              var value1;
        // Get all the child elements inside the container.
        var cont = document.getElementById('container').children;

        for (var i = 0; i < cont.length; i++) {
            // Check if the element is a checkbox.
            if (cont[i].tagName == 'INPUT' && cont[i].type == 'checkbox') {     
                // Finally, check if the checkbox is checked.
                if (cont[i].checked) {      
                  //  alert(cont[i].value + ' is checked!');
                    count1++;
                }
            }
        }
              
             
              for (var j = 0; j <=count1 ; j++) 
                  {
                     value1 = Math.pow(j,2);
                      if(value1>=count1)
                          {  if(value1==count1)
                              {
                                 document.getElementById("output_answer").value= count1;   
                              }
                           else{
                               var maxsqr = Math.pow(j-1,2);
                               document.getElementById("output_answer").value= maxsqr;
                               }
                             
                              break;
                          }
                  }
    }
             
              
          


        
