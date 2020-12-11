// // this section is for the Character Ref page. //

// *************************************************************************************
//                   This is code I was messing with, trying to figure
//                   out how to grab info from the first page and apply
//       A/N         it to the second page. Then I realized I can't do
//                   it this way at all without some kind of storage.
// *************************************************************************************

// var nameID = "";
// var ageID = "";
// var aboutID = "";


// function replaceMC(){

//     // these are the values for each of the user inputs on the intake form //
//     var mcName = document.getElementById("fname").value;
//     var mcAge = document.getElementById("age").value;
//     var mcAbout = document.getElementById("personal").value;


//     // grab the ids we want and change them from null to false so we can assign values with other vars //
//      function getNameID() {
//          let name = document.getElementById("mc-name") != null; // returns false instead of null //
//             return name

//      }
    
//      nameID = getNameID(); // nameID is false here //

//      function getAgeID() {
//        let age = document.getElementById("mc-age") != null;
//             return age
//      }

//      ageID = getAgeID();

//      function getAboutID() {
//         let about = document.getElementById("mc-about") != null;
//         return about
//      }

//      aboutID = getAboutID();

//     // replace nameID with user name value //
//       function replaceName(x){
//          if ( x === false){
//              x = mcName
//              return x
//          } 
//       }

//       function replaceAge(x){
//         if ( x === false){
//             x = mcAge
//             return x
//         } 
//      }

//      function replaceAbout(x){
//         if ( x === false){
//             x = mcAbout
//             return x
//         } 
//      }


//       // store user name as the new nameID //
//       nameID = replaceName(nameID);
//       ageID = replaceAge(ageID);
//       aboutID = replaceAbout(aboutID);

//       console.log(nameID);
//       console.log(ageID);
//       console.log(aboutID);


//      // get the paragraph elements at the top (0-2) in order to change the content //
//         function getP() {
//             var p = document.getElementsByTagName("P");
//             p.item(0).innerHTML = nameID;
//             return p
//           }
// }
