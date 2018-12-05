firstPerson = {
         fname:"Anil",
         lname:"Panpatil",
         age:20,
         skills:["cutia","Autocad","HTML"],
         dateOfbirth:new Date('1-02-1997'),

         adress:{city:"Dhule",
                 pinCode:424002,
                 married:false,
                 profession:"Mech.Enggineer"}
}
secondPerson = {
    fname:"Tushar",
    lname:"Deore",
    age:20,
    skills:["Embedded c","c","HTML"],
    dateOfbirth:new Date('15-07-1997'),

    adress:{city:"Dhule",
            pinCode:424002,
            married:false,
            profession:"Engineer"}
}
information=function(){
    console.log(firstPerson);
    console.log(secondPerson);

}

information();

