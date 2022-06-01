
// Task 3: A person class to hold all the details

class person{
    constructor(name,email,city,education,languages){
        this.name=name;
        this.email=email;
        this.city=city;
        this.education=education;
        this.languages=languages;
    }
}

var p1= new person('John Doe', 'me@johndoe.com','Hersey','Masters in CS','English & Spanish');

console.log(p1);


// Task 4: Class to calculate Uber Price

     class uberPrice {
            constructor(CustomerName,BaseFare,CostperMinute,RideTime,CostperMile,RideDistance,BookingFee){
            this.CustomerName=CustomerName;
            this.BaseFare=BaseFare;
            this.CostperMinute=CostperMinute;
            this.RideTime=RideTime;
            this.CostperMile=CostperMile;
            this.RideDistance=RideDistance;
            this.BookingFee=BookingFee;
            }
    YourFare(){
        return (this.BaseFare+ (this.CostperMinute*this.RideTime) + (this.CostperMile*this.RideDistance) + this.BookingFee )
    }
    }

    var r1 = new uberPrice("John Doe",40,20,20,8,7,15);
    var r2 = new uberPrice("Ashok",40,25,30,8,12,15);

    console.log(`Hi ${r1.CustomerName}, total Price of your Ride is ₹ ${r1.YourFare()}`);
    console.log(`Hi ${r2.CustomerName}, total Price of your Ride is ₹ ${r2.YourFare()}`);
