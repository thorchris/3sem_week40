var numbers = [1, 3, 5, 10, 11];

function makeListItem(number){
    return `<li>${number}</li>`
}

//let listitems = numbers.map(makeListItem).join(""); 

function myMap(callback, array){
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
}

let listitems = myMap(makeListItem, numbers).join("");
console.log(listitems)
