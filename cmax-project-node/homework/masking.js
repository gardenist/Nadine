
function mask(text, start, end, maskCharacter) {

    for(var i = 1; i < text.length; i++){
        if(i = text[start] || i < text[end]){
            var number = text.replace(phoneNumber, maskCharacter)
        }
        
    }
}
 
 
 let phoneNumber = "010-1234-5678";
 let masked = mask(phoneNumber, 4, 7, "*");
 
 console.log(masked); // "010-XXXX-5678" 출력