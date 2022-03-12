function getResult_1 (string) {
    return string[0].toUpperCase() + string.substring(1, string.length)
}

console.log(getResult_1('имя'), '==', 'Имя')




function getResult_2 (array) {
    var number = 0

// for (let i = 0; i < array.length; i++) {
// number = number + array[i]    
// }    

    array.map((a) => {
        number = number + a
    })

    return number
}

console.log(getResult_2([1, 2, 3, 4, 5]), '==', 15)
console.log(getResult_2([-1, -2, -3, -4, -5]), '==', -15)
console.log(getResult_2([-2, -2, 0, 4]), '==', 0)



function getResult_3 (text) {
    var map = {
        '2': '!',
        '3': '!',
        '5': '!',
       
      };
    
      return text.replace(/[235]/g, function(m) { return map[m]; });
    }

console.log(getResult_3('Текст с числами 2 и 3 до 5.'), '==', 'Текст с числами ! и ! до !.')



function getResult_4 (string) {
    var s = 0
    const s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 32]

    for (let i = 0; i < array.length; i++) {
         s = s + array[i] 
    }
    
    string[s + array[i]]
}