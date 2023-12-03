// function an() {
//     document.getElementById('text').classList.add('hien');
// }


// function hien() {
//     document.getElementById('text').classList.remove('hien');
// }

// function thayDoi() {
//     document.getElementById('text').classList.toggle('hien');
// }

// function change() {
//     let elements = document.getElementsByTagName('div');
//     for (let i=0;i<elements.length;i++) {
//         elements[i].style.height = '50px';
//         elements[i].style.backgroundColor = elements[i].id;
//     }
// }

window.onload = function() {
    let elements = document.getElementsByTagName('div');
    for (let i=0;i<elements.length;i++) {
        //C2: dùng phần tử gọi sự kiện
        elements[i].onmouseover = function () {
            elements[i].style.backgroundColor = elements[i].id;
        };

        //C3: dùng eventListener
        elements[i].addEventListener("mouseout", function() {
            elements[i].style.backgroundColor = 'white';
        })
    }
}
