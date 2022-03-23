class User {
    constructor(userName, emailAddress){
        this.name = userName,
        this.email = emailAddress,
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance = this.accountBalance + amount;
    }
    makeWithdrawl(amount){
        this.accountBalance = this.accountBalance - amount;
    }
    displayBalance(){
        console.log("User: " + this.name + ", account balance is: $" + this.accountBalance);
    }

    transferMoney(otherUser, amount){
        this.accountBalance = this.accountBalance - amount;
        otherUser.accountBalance = otherUser.accountBalance + amount;
    }
}

const thomas = new User("Thomas", "thomas@gmail.com");
const donnie = new User("Donovan", "donny@gmail.com");
const jayden = new User("Jayden", "jayden@gmail.com");

thomas.makeDeposit(300);
thomas.makeDeposit(300);
thomas.makeDeposit(200);
thomas.makeWithdrawl(375);
thomas.displayBalance();

donnie.makeDeposit(300);
donnie.makeDeposit(250);
donnie.makeWithdrawl(75);
donnie.makeWithdrawl(275);
donnie.displayBalance();

jayden.makeDeposit(650);
jayden.makeWithdrawl(50);
jayden.makeWithdrawl(500);
jayden.makeWithdrawl(50);
jayden.displayBalance();

thomas.transferMoney(jayden, 200);
thomas.displayBalance();
jayden.displayBalance();