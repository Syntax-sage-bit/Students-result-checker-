let marks = []
for(i=0;i<=4;i++){
  a=prompt("enter your marks")
  b=parseInt(a)
  marks.push(b)
}
console.log(marks)
sum= 0 
for(i=0;i<marks.length;i++){
  sum+=marks[i]
}
if(sum/marks.length>=33){
  console.log("passed");
}
else{
  console.log("failed")
}