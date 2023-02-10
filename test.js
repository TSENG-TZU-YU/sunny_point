
function createArray(length){
    let arr=[]
    for(let i =0;i<length;i++) {
        const obj={}
        for(let a=0;a<2;a++){
        const random = (Math.floor(Math.random() * 10000) + 1)/100+"%";
          if(a===0){
            obj.left=random
          }else{
            obj.top=random
          }
        }
        arr.push(obj)
      }
      return arr
}


console.log(createArray(2))