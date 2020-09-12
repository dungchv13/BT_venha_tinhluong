function xacNhan() {
    let n = parseFloat(document.getElementById("inputN").value);

    if(n < 10000000){

        bacluong(n);
    }else if(n >= 10000000 && n <= 50000000){
        n = n * 0.9;
        bacluong(n);
    }else{
        n = n * 0.8 * 0.9;
        bacluong(n);
    }
}
function bacluong(n){
    let b = parseInt(document.getElementById("bac").value);
    switch (b){
        case 1:
            document.getElementById("result").innerHTML="luong mot nam cua ban la:" + (n * 6 + n * 0.9 * 3 + n * 0.8 * 3);
            break;
        case 2:
            document.getElementById("result").innerHTML="luong mot nam cua ban la:"+(n * 3 + n * 3 * 0.9 + n * 6 * 0.8);
            break;
    }

}