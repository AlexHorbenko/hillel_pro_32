const generateList = (array, parent = document.body) => {

    let ul = document.createElement('ul');

    array.forEach(elem => {
        let li = document.createElement('li');
        if (Array.isArray(elem)) {
            generateList(elem, li);
        } else {
            li.innerText = elem;
        }
        ul.append(li);
    });

    parent.append(ul);
};

let array = [1, 2, 3];
generateList(array);
let arr = [1, 2, [2.1, 2.2, 2.3], 3]
generateList(arr);





// ************************************************ЗАВДАННЯ*********************************************************
// Написати функцію generateList(array),
// яка приймає масив із чисел               // ([1, 2, 3]) => {}
// та масивів чисел (наприклад [1,2, 3])    // ([1, 2, [2.1, 2.2, 2.3], 3]) => {}
// і генерує список з елементів:

// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>
// *****************************************************************************************************************
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>
//         <ul>
//             <li>1.1</li>
//             <li>1.2</li>
//             <li>1.3</li>
//         </ul>
//     </li>
//     <li>3</li>
// </ul>