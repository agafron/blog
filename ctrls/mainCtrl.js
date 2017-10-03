//var dateNow = new Date().getDate() + "/" + ((new Date().getMonth() +1)<10?("0" + (new Date().getMonth() +1)):(new Date().getMonth() +1)) + "/" + new Date().getFullYear();
  //var timeNow = ((new Date().getHours())<10?("0" + new Date().getHours()):(new Date().getHours())).toString() + ":" + ((new Date().getMinutes())<10?("0" + new Date().getMinutes()):(new Date().getMinutes())).toString() + ":" + ((new Date().getSeconds())<10?("0" + new Date().getSeconds()):(new Date().getSeconds())).toString();
  //   function dateTimeSet() {
  // setInterval(function () {
  //     var dateNow = new Date().getDate() + "/" + ((new Date().getMonth() +1)<10?("0" + (new Date().getMonth() +1)):(new Date().getMonth() +1)) + "/" + new Date().getFullYear();
  //     var timeNow = ((new Date().getHours())<10?("0" + new Date().getHours()):(new Date().getHours())).toString() + ":" + ((new Date().getMinutes())<10?("0" + new Date().getMinutes()):(new Date().getMinutes())).toString() + ":" + ((new Date().getSeconds())<10?("0" + new Date().getSeconds()):(new Date().getSeconds())).toString();
  //   return document.write("Дата: " + dateNow + " время: " + timeNow);
  //    }, 1000);
  //    }

     var app = angular.module('myApp', []);
     app.controller('mainCtrl', function () {
       this.open = function(item) {
            console.log("open");
            //console.log(item);
            this.current = item;
            this.back = true;
          };
            this.backs = function() {
            this.back = false;
            console.log('back');
          };
            
          
      this.list = [     
          // {
          //   name: "Вред алкоголя и его влияние на организм человека", 
          //   text: "Текст про Вред алкоголя и его влияние на организм человека",
          //   img: "img/1.jpg",
          //   id: "1"
          // },       
          // {
          //   name: "Трансгуманизм", 
          //   text: "Текст про Трансгуманизм",
          //   img: "img/2.jpg",
          //   id: "2"
          // },     
          // {
          //   name: "За качеством ремонта дорог в Украине будут следить международные эксперты, за брак накажут – Мининфраструктуры", 
          //   text: "Текст про За качеством ремонта дорог в Украине будут следить международные эксперты, за брак накажут – Мининфраструктуры",
          //   img: "img/3.jpg",
          //   id: "3"
          // },
          {
            name: "Как написать блог",
            text: "Текст о том Как написать блог",
            img: "img/4.jpg",
            id: "4"
          }

          ];
     });
     /*app.controller('commentCtrl', function () {
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
    // });
    
     //  .directive('firstDir', function () {
     //  return {
     //    scope: {
     //      name: '='
     //    },
              
     //    template: 
     //    ""
     //  }
      });*/
     
     