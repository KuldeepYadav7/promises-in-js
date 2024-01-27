function myDisplayer(val){
    console.log(val);
}
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );