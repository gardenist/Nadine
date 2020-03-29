
let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function moveTo (list, x, y) {
    let moveItem = list[x] 
    // c = index 2
    list.splice(x, 1);


    if(x < y){
        for(var x = i; i < y; i++){
            list[i] = list[i + 1]
        }
    } else {
        for(var x = i; x > y;)
    }
    
    
}
 

//moveTo(list, 2, 5);

moveTo(list, 2, 5);
