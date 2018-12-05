


amitabh = {
    fname:"Amitabh",
    lname:"bachhan",
    age:50,
    skills:["actor","poet","singer"],
    dateOfbirth:new Date('1-02-1997'),
    adress:{ city:"Mumbai",
    pinCode:424002,
    married:true,
    profession:"Actor" }
  }

var abhishek =  Object.create(amitabh);
abhishek.fname = "Abhishek";
console.log(amitabh);
console.log(abhishek.lname);

var aradhya = Object.create(abhishek)
aradhya.fname="aradhya";
console.log(aradhya);
console.log(aradhya.lname);

