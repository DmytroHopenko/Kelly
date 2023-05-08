document.addEventListener('mousemove', active);

var height_elem1 = document.querySelector('.wrap-img:nth-child(1)');
var height_elem2 = document.querySelector('.wrap-img:nth-child(2)');
var height_elem3 = document.querySelector('.wrap-img:nth-child(3)');
var height_elem4 = document.querySelector('.wrap-img:nth-child(4)');
var height_elem5 = document.querySelector('.wrap-img:nth-child(5)');
var height_elem6 = document.querySelector('.wrap-img:nth-child(6)');
var height_elem7 = document.querySelector('.wrap-img:nth-child(7)');
var height_elem8 = document.querySelector('.wrap-img:nth-child(8)');
var height_elem9 = document.querySelector('.wrap-img:nth-child(9)');

var width_elem1 = document.querySelector('.block-items');

var height1 = height_elem1.offsetHeight;
var height2 = height_elem2.offsetHeight;
var height3 = height_elem3.offsetHeight;
var height4 = height_elem4.offsetHeight;
var height5 = height_elem5.offsetHeight;
var height6 = height_elem6.offsetHeight;
var height7 = height_elem7.offsetHeight;
var height8 = height_elem8.offsetHeight;
var height9 = height_elem9.offsetHeight;

function active(){
    var doc_width = document.querySelector('main').offsetWidth;
    var size1 = 1024;
    var size4 = 768;
    if(doc_width >= size1){
        flex();
    }
    else if(doc_width <= size4){
        console.log("Resolution is " + doc_width);

        height_elem5.style.top = 0;
        height_elem4.style.top = 0;
        height_elem8.style.top = 0;   

        height_elem7.style.right = 0;
        height_elem7.style.top = 0;
        height_elem9.style.top = 0;
    }
    else{
        console.log("Not found resolution")
    }
}

function flex(){
    let height_elem1 = document.querySelector('.wrap-img:nth-child(1)');
    let height_elem2 = document.querySelector('.wrap-img:nth-child(2)');
    let height_elem3 = document.querySelector('.wrap-img:nth-child(3)');
    let height_elem4 = document.querySelector('.wrap-img:nth-child(4)');
    let height_elem5 = document.querySelector('.wrap-img:nth-child(5)');
    let height_elem6 = document.querySelector('.wrap-img:nth-child(6)');
    let height_elem7 = document.querySelector('.wrap-img:nth-child(7)');
    let height_elem8 = document.querySelector('.wrap-img:nth-child(8)');
    let height_elem9 = document.querySelector('.wrap-img:nth-child(9)');

    let width_elem1 = document.querySelector('.block-items');

    let height1 = height_elem1.offsetHeight;
    let height2 = height_elem2.offsetHeight;
    let height3 = height_elem3.offsetHeight;
    let height4 = height_elem4.offsetHeight;
    let height5 = height_elem5.offsetHeight;
    let height6 = height_elem6.offsetHeight;
    let height7 = height_elem7.offsetHeight;
    let height8 = height_elem8.offsetHeight;
    let height9 = height_elem9.offsetHeight;


    var delta1= height1 - height2;
    var delta2= height1 - height3;
    var delta3= height1 - height2;

    var row1 = 0 - delta1;
    var row1_2 = 0 - delta2;

    height_elem5.style.top = row1 + 'px';
    height_elem4.style.top = row1_2 + 'px';
    height_elem8.style.top = row1 + 'px';

    var width1 = width_elem1.offsetWidth;
    var width2 = height_elem7.offsetWidth;

    var delta_w1 = width1 - width2;

    var column1 = 0 - delta_w1;

    height_elem7.style.right = column1 + 'px';
    height_elem7.style.top = row1_2 * 2.85 + 'px';
    height_elem9.style.top = row1_2 * 1.26 + 'px';
}
