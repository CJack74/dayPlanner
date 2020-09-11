$(document).ready(function () {
    console.log("timehandler")
    var localTime = document.querySelector("#currentTime-local");
    //var now = moment();


    //logs moment in console (now try to convert from military time)
    const now = moment();
      console.log(now)
      console.log(now.hour())

    
    if(now.hour() > 5){
      console.log("it worked")
    }
    //Trying to insert and show current time into currentTime div
    if (localTime) {
    localTime.textContent = now.format("MMM DD, YYYY - hh:mm:ss a");
    $("#currentTime").append(now)
    }


    //text box array
//var textboxArray = $(".table-input");
//name of array forEach funct that will go through each element in the array
//the function and I am passing in the elements in the array
//textboxArray.forEach(function(myElement){{
          //if ( this.moment === "ago" ) {
//             this.style.color = ".past";
//           } 
//             else if (this.moment === "from now") {
//                 this.style.color = ".future";
//                 }
//                 else {
//                     this.style.color = ".present";
//                 }
            
//         };
//       });

 })