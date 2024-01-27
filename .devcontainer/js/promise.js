const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Kuldeep", email:"kulman@gmail.com", phoneNo:87915327})
    }, 1000)
});
promiseOne.then(function(user){
    console.log(user)
});