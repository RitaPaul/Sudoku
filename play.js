/*var rows=5;
for(var i=1;i <=rows; i++){
    for(var k=1;k<=(rows-i); k++){
        document.write("&nbsp;");

    }
    for(var j=1;j<=i;j++){
        document.write("* ");

    }
    document.write("<br/>");
}*/
var sud =[
          [0,0,0,  0,0,0,  0,0,0],
          [0,0,0,  0,0,0,  0,0,0],
          [0,0,0,  0,0,0,  0,0,0],

          [0,0,0,  0,0,0,  0,0,0],
          [0,0,0,  0,0,0,  0,0,0],
          [0,0,0,  0,0,0,  0,0,0],

          [0,0,0,  0,0,0,  0,0,0],
          [0,0,0,  0,0,0,  0,0,0],
          [0,0,0,  0,0,0,  0,0,0] 
        ];
/*
for (var i=0; i< sud.length;i++){
  
    var inner = sud[i].length;
    for (var j=0; j< inner;j++){
        console.log('[' + i + ',' + j + '] = ' + sud[i] + + sud[i] );
        document.write(sud[i][j]+ ' &nbsp; ');
        if(j==2 || j==5 ){
            document.write( ' &nbsp; ');
            document.write( ' &nbsp; ');
        }
    }
    if(i==2 || i==5 ){
        document.write('<br>');
    }
    document.write('<br>');
}*/
let Sudoku = function(start,end){
   for( i = 0; i < start; i ++){
       for(j = 0; j < end; j ++ ){
       // document.write(j);
       document.write(sud[i][j]);
       document.write( ' &nbsp; ');
       if(j == 2 || j == 5  ){
        document.write( ' &nbsp; ');
        document.write( ' &nbsp; ');
       }
      
   } if(i == 2 || i == 5){
    document.write('<br>');
   }

   document.write('<br>');
   }
}

let Random_num = function(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

let newBoard = function(){
   let j0 = Random_num(0,2);
   let j1 = Random_num(3,5);
   let j2 = Random_num(6,8);


   let j3 = Random_num(1,2);
   let j4 = Random_num(4,5);
   let j5 = Random_num(7,8);

   let j6 = Random_num(0,1);
   let j7 = Random_num(3,4);
   let j8 = Random_num(6,8);

   let j9 = Random_num(0,1);
   let j10 = Random_num(3,4);
   let j11 = Random_num(6,8);



    

   console.log(sud[0][j0] = Random_num(1,3));
   console.log(sud[0][j1] = Random_num(4,6));
   console.log(sud[0][j2] = Random_num(7,9));

   console.log(sud[1][1] = Random_num(4,6));
   console.log(sud[1][4] = Random_num(7,9));
   console.log(sud[1][7] = Random_num(2,3));


   console.log(sud[2][j3] = Random_num(7,9));
   console.log(sud[2][j4] = Random_num(1,3));
   console.log(sud[2][j5] = Random_num(4,5));

   console.log(sud[3][j1] = Random_num(2,4));
   console.log(sud[3][j2] = Random_num(5,7));
   console.log(sud[3][j0] = Random_num(8,9));

   console.log(sud[5][j1] = Random_num(8,9));
   console.log(sud[5][j2] = Random_num(2,4));
   console.log(sud[5][j0] = Random_num(5,7));

   console.log(sud[6][j6] = Random_num(1,2));
   console.log(sud[6][j7] = Random_num(3,5));
   console.log(sud[6][j8] = Random_num(6,8));

   console.log(sud[7][j6] = Random_num(3,5));
   console.log(sud[7][j7] = Random_num(6,8));
   console.log(sud[7][j8] = Random_num(1,2));








   //console.log(sud[0][j2] = Math.floor(Math.random() *  ) + 1;
   //sud[0][j0] =Random_num(0,8);

   console.log(" J0 =  " + j0);
   console.log(" j1 =  " + j1);
   console.log(" j2 =  " + j2);
   console.log(" j3 =  " + j3);
   console.log(" j4 =  " + j4);
   console.log(" j5 =  " + j5);

    Sudoku(9,9);
}
