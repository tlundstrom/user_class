class User {
    constructor(userName, emailAddress){
        this.name = userName,
        this.email = emailAddress,
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance = this.accountBalance + amount;
        return this
    }
    makeWithdrawl(amount){
        this.accountBalance = this.accountBalance - amount;
        return this
    }
    displayBalance(){
        console.log("User: " + this.name + ", account balance is: $" + this.accountBalance);
        return this
    }

    transferMoney(otherUser, amount){
        this.accountBalance = this.accountBalance - amount;
        otherUser.accountBalance = otherUser.accountBalance + amount;
        return this
    }
}

const thomas = new User("Thomas", "thomas@gmail.com");
const donnie = new User("Donovan", "donny@gmail.com");
const jayden = new User("Jayden", "jayden@gmail.com");

thomas.makeDeposit(300).makeDeposit(300).makeDeposit(200).makeWithdrawl(375).displayBalance();
donnie.makeDeposit(300).makeDeposit(250).makeWithdrawl(75).makeWithdrawl(275).displayBalance();
jayden.makeDeposit(650).makeWithdrawl(50).makeWithdrawl(500).makeWithdrawl(50).displayBalance();
thomas.transferMoney(jayden, 200).displayBalance();
jayden.displayBalance();