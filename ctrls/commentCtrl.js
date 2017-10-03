 'use strict'
 //var dateNow = new Date().getDate() + "/" + ((new Date().getMonth() +1)<10?("0" + (new Date().getMonth() +1)):(new Date().getMonth() +1)) + "/" + new Date().getFullYear();
 
     app.controller('commentCtrl', function () {
        this.date = new Date();
        
        this.comments = [{
         nameCommentator: "anonimous",
         date: "25/08/2017", //"dateNow.toString()",
         time: "23:15:46", //"timeNow.toString()",
         description: "комменнтарий"}
      ];
        
        this.resetComment = function() {
        this.newComment = {
        nameCommentator: "anonymous",
        date: Date.now(),
        time: Date.now(),
        description: null
    }
//     console.log("reset");
//     console.log(this.comments);
   }
   this.resetComment();


    this.addComment = function() { 
     var adds =  Object.assign({}, this.newComment);
             this.comments.push(adds);
             //console.log(dateTimeSet());
    //this.comments.push(this.newComment);
    // this.dateNow.toString().push(this.newComment);
    // this.timeNow.toString().push(this.newComment);
    this.resetComment();
  //console.log("add");
  //console.log(this.comments);
  console.log(this.newComment);
}
 // this.backs = function() {
 //            this.back = false;
 //            console.log('back');
 //          };
});