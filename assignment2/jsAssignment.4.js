


class Bankaccount{
    constructor(accountNumber,accountHolderName,accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    deposite(amount){
        this.accountBalance += amount;
    }
}
/*************************************class for withdraw amount from saving account******************************************************************** */
class Savings extends Bankaccount{
    constructor(accountNumber,accountHolderName,accountBalance,isSalary)
    {
        super(accountNumber,accountHolderName,accountBalance)
        this.isSalary =isSalary;
    }
    withdraw(amount){
        this.accountBalance = this.accountBalance - amount;
        
        if(this.accountBalance < amount){
                     console.log("insufficient balance");
                     }
                     else{
                         console.log("amount withdrawn :"+amount + ","+"remaining balance: " +this.accountBalance);
                     }

}  
    }
 /**************************class for withdraw amount from current********************************************************************************** */

 class Current extends Bankaccount{
        constructor(accountNumber,accountHolderName,accountBalance,odLimit)
        {
            super(accountNumber,accountHolderName,accountBalance)
            this.odLimit = odLimit;
        }
        withdraw(amount){
            this.accountBalance = this.accountBalance - amount;

                 if(this.accountBalance<=0)

                   {
                       if((amount)>=(this.odLimit+this.accountBalance)){

                       console.log("Insufficient balance!!!!");
                    }
                       else{
                            console.log("withdrawal amount is:"+amount +"remaining balance is:"+this.accountBalance)
                            console.log("amount withdwawn Succefully");
                           }
                           
                       }
                        else{
                            console.log("Withdrawn amount is:"+amount+"remaining balance is:"+this.accountBalance);
                            console.log("amount withdrawn succesfully");
                        }
                    }
                }

 /***************************object for saving and current*************************************************************************************** */
                
var savings = new Savings(102121211,"tushar",10000,true);
var current = new Current(102145411,"tushar",20000,40000);

savings.deposite(0000);   //add deposite to saving account
savings.withdraw(1000);   //withdraw amount from saving accounts.
current.deposite(1000);   //add deposite to curent account.
current.withdraw(30000);  //withdraw amount from cuurent account