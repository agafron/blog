 'use strict'
 //var dateNow = new Date().getDate() + "/" + ((new Date().getMonth() +1)<10?("0" + (new Date().getMonth() +1)):(new Date().getMonth() +1)) + "/" + new Date().getFullYear();
 
     app.controller('loginCtrl', function () {
        //this.date = new Date();
        this.registration = function(value) {
              this.value = value;
              this.ent = !this.ent;
              console.log('regchange');
              //this.reg = true;
            }
        this.user = [];
        
        this.resetLogin = function() {
        this.newUser = {
         name: "",
         lastName: "",
         login: "",
         email: "",
         password: "",
         confirmPassword: ""
         }
//     console.log("reset");
//     console.log(this.comments);
   }
   this.resetLogin();


    this.addUser = function() { 
     var adds =  Object.assign({}, this.newUser);
             this.user.push(adds);
             //console.log(dateTimeSet());
    //this.comments.push(this.newComment);
    // this.dateNow.toString().push(this.newComment);
    // this.timeNow.toString().push(this.newComment);
    this.resetLogin();
  //console.log("add");
  //console.log(this.comments);
  console.log(this.user);
}
// this.registration = function(value) {
//               this.value = value;
//               this.ent = !this.ent;
//               //this.reg = true;
//             }
 });