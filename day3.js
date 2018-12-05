//var person= {name:"amitabh",surname:"bachhan"}
//console.log(person);
//Object.defineProperties(person,{name:{value:"tushar",configurable:true,writable:false,enumerable:true},
                               // surname:{value:"deore",configurable:true,writable:true,enumerable:true}});
//console.log(person);


//Object.defineProperties(person,{name:{value:"rahul",configurable:true,writable:true,enumerable:true},
                                //surname:{value:"deore",configurable:true,writable:true,enumerable:true}});

//console.log(person);
function person(id,name){
           this.id=id;
           this.name=name;

}

var person1 = new person(101,"amitabh");
var person2 = new person(1021,"abhishek");
person.prototype.surname="bachhan";
console.log(person1.name,person1.surname);
console.log(person2.name,person2.surname);

person.prototype.print= function(){
    console.log(this.id);
    console.log(this.name);
    console.log(this.surname);
   }