new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hello world");
        resolve("How are you");
    }, 1000)
}).then(function(msg){
    console.log(msg);
});