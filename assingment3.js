function MaxSQ(strArr) {
    xvalue = new Array(strArr.length + 1).fill().map
        (row => new Array(strArr[0].length + 1).fill(0));
    Maxvalue = 0;

    for (i = strArr.length - 1; i >= 0; i--) {
        for (a = strArr[0].length - 1; a >= 0; a--) {
            if (strArr[i][a] == '0') continue;
            xvalue[i][a] = Math.min(xvalue[i + 1][a],
                xvalue[i][a + 1],
                xvalue[i + 1][a + 1]) + 1;

            Maxvalue = Math.max(Maxvalue,
                xvalue[i][a]);
        }
    }
    return Math.pow(Maxvalue, 2);
}
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
        
        function myFunction() {
            var r11,r12,r13,r14;
            var r21,r22,r23,r24;
            var r31,r32,r33,r34;
            var r41,r42,r43,r44;     
            var r1value,r2value,r3value,r4value;
            
            if(document.getElementById("r11").checked == true){
                 r11 ="1"
                
            }
               else{
                 r11 ="0"
                   
               }
              if(document.getElementById("r12").checked == true){
                 r12 ="1"
                
            }
               else{
                 r12 ="0"
                   
               }
              if(document.getElementById("r13").checked == true){
                 r13 ="1"
                
            }
               else{
                 r13 ="0"
                   
               }
              if(document.getElementById("r14").checked == true){
                 r14 ="1"
                
            }
               else{
                 r14 ="0"
                   
               }
             if(document.getElementById("r21").checked == true){
                 r21 ="1"
                
            }
               else{
                 r21 ="0"
                   
               }
              if(document.getElementById("r22").checked == true){
                 r22 ="1"
                
            }
               else{
                 r22 ="0"
                   
               }
              if(document.getElementById("r23").checked == true){
                 r33 ="1"
                
            }
               else{
                 r33 ="0"
                   
               }
              if(document.getElementById("r24").checked == true){
                 r24 ="1"
                
            }
               else{
                 r24 ="0"
                   
               }
             if(document.getElementById("r31").checked == true){
                 r31 ="1"
                
            }
               else{
                 r31 ="0"
                   
               }
              if(document.getElementById("r32").checked == true){
                 r32 ="1"
                
            }
               else{
                 r32 ="0"
                   
               }
              if(document.getElementById("r33").checked == true){
                 r33 ="1"
                
            }
               else{
                 r33 ="0"
                   
               }
              if(document.getElementById("r34").checked == true){
                 r34 ="1"
                
            }
               else{
                 r34 ="0"
                   
               }
             if(document.getElementById("r41").checked == true){
                 r41 ="1"
                
            }
               else{
                 r41 ="0"
                   
               }
              if(document.getElementById("r42").checked == true){
                 r42 ="1"
                
            }
               else{
                 r42 ="0"
                   
               }
              if(document.getElementById("r43").checked == true){
                 r43 ="1"
                
            }
               else{
                 r43 ="0"
                   
               }
              if(document.getElementById("r44").checked == true){
                 r44 ="1"
                
            }
               else{
                 r44 ="0"
                   
               }
            r1value = r11+r12+r13+r14; 
            r2value = r21+r22+r23+r24;
            r3value = r31+r32+r33+r34;
            r4value = r41+r42+r43+r44;
             
           
        //  var v1 = document.getElementById("parameter_0").value;
        //  var v2 = document.getElementById("parameter_1").value;
        //  var v3 = document.getElementById("parameter_2").value;
        //  var v4 = document.getElementById("parameter_3").value;

          var result=MaxSQ([r1value,r2value,r3value,r4value]);
          document.getElementById("output_answer").value=result;
          


        }
