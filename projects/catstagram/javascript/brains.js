var counter1 = 0;
function likePhoto(num) {
    counter1[num]++;
    console.log(counter1);
    document.getElementById("likeCount1").innerHTML = counter1;
}
