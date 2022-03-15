var likeCount = [0,0,0,0,0,0,0,0,0,0,0,0];
function likePhoto(num) {
    likeCount[num]++;
    console.log(likeCount);
    document.getElementById("likeCount" + num).innerHTML = likeCount[num];
}
var user = {
    "name": "I<3oldbaldmen",
    "followers":["john", "linda", "bob", "men", "wooman"],
    "profile_pic": "https://i.pinimg.com/564x/b2/00/91/b200915950f6e5240d8fab279f6e3eba.jpg",
}
setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
 setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
 setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
 setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);