// Task 1:

// constructor for the class Movie, which takes a String representing title, studio and rating


class Movie{
  constructor(title,studio,rating="PG"){                               // class property rating to "PG" as default when no rating is provided
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  getPG(){
    var allMov =  allmov.filter( function (el) {                      // returns a new array of only those movies in the input array with a rating of "PG"
     return el.rating == "PG"; });
     console.log(allMov);
    }
 
  
} 

var m1=new Movie("Inception", "Warner Bros", 'PG');
var m2=new Movie("The White Tiger", "Netflix", 'PG');
var m3= new Movie("Doctor", "KJR Studios", "PG 13");
var m4=new Movie("Kaun Pravin Tambe?", "Fox Star Studios", "PG 13");
var allmov = [m1, m2, m3, m4];

m1,m2,m3,m4.getPG();

var m5 = new Movie("Casino Royale", "Eon Productions", "PG13")      //  instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”



// Task 2: Convert the UML diagram to Typescript class

class Circle{
  constructor(radius,color){
    this.radius=radius;
    this.color=color;
  }
  
  get getRadius(){                      // Method getRadius() is created to access the property of an object inside a class
    return this.radius;
    }
    
    get getColor(){             // Method getCircumference() is created to access the property of an objcet inside a class
    return this.color;
    }
  
  
   set changeRadius(newRadius) {        // setter method is used to change the value of radius after declaration
  this.radius = newRadius;
  }
  
  
  set changeColor(newColor) {             // setter method is used to change the value of property color after declaration
  this.color= newColor;
  }

  
  circumference(){                                              // new method created to output circumference of the circle
    return (2* Math.PI *this.radius).toFixed(2);
  }
  
  area(){                                                             // new method created to output area of the circle
    return (Math.PI *this.radius*this.radius).toFixed(2);
  }

}
let c1 = new Circle(5, "Green");
let c2 = new Circle(8, "Blue");
let c3 = new Circle(15, "Yellow");




console.log(`${c1.getRadius} is the old radius of Circle c1`)

c1.changeRadius = 14;
console.log(`${c1.getRadius} is the new radius of Circle c1`);

c2.changeColor = "Black";
console.log(`${c2.color} is the new color of Circle c2`);

console.log(`${c2.circumference()} is the circumference of Circle c2`);

console.log(`${c3.area()} is the area of Circle c3`);