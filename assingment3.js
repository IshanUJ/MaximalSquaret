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
            var value;
          var v1 = document.getElementById("parameter_0").value;
          var v2 = document.getElementById("parameter_1").value;
          var v3 = document.getElementById("parameter_2").value;
          var v4 = document.getElementById("parameter_3").value;
        //   values =v1.concat(',', v2,',', v3,',', v4);
        //   var sss ='['
        //   var xyz = sss.concat(values,']');

          var result=MaxSQ([v1,v2,v3,v4]);
          document.getElementById("output_answer").value=result;
          


        }
