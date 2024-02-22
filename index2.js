// var array=[[9,6,1],
//            [10,15,25],
//            [7,5,30]];
//            for(var i=0;i<array.length; i++ ){
//             for(var j=0;j<array.length; j++ ){
//                 if(array[i][j]%3==0&&array[i][j]%5==0){
//                     console.log(array[i][j])
//                 }
//             }
//            }

var arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];

var sum1=0;
var sum2=0;

var sum4=0;

         for(var i=0;i<arr.length; i++ ){
        for(var j=0;j<arr.length; j++ ){
        if(i==j){
            sum1+=arr[i][j];
          }
           if (i+j==arr.length-1) {
            sum2+=arr[i][j];
          } 
          if(i==0||j==0||i==2||j==2){
            sum4+=arr[i][j];
          }
        }
   }
   
   var sum3=sum1+sum2;

   if(sum3>sum4){
    console.log(sum3-sum4);
   } else{
    console.log(sum4-sum3);
   }
   