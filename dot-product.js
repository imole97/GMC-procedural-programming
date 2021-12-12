/* orthagonal vectors have a dot product of 0 
example: [a,b,c] [x,y,z]
(a.x) + (b.y) + (c.z) = 0
*/

function dot_product (arr1,arr2){

    let result = 0

    for (i=0; i<arr1.length; i++){
      for (i=0; i<arr2.length; i++) {
        result+=arr1[i]*arr2[i]
      }
  
    }
    if (result === 0){
      return ('the two arrays are orthagonal, and the dot product is : '+ result)
    } else {
      return ('the two arrays are not orthagonal, and the dot product is : '+ result)
    }
  
   
  }
  
  console.log(dot_product([3,-1], [7,5]))
  console.log(dot_product([1,2,0], [2,-1,10]))