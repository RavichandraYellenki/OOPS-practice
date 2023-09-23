
    // function createCustomer(name,bank, balance) {
    //     this.name = name;
    //     this.bank = bank;
    //     this.balance = balance;
    //     // this.withDraw = function (amount){
    //     //     this.balance -= amount;
    //     // }
    // }

    // createCustomer.prototype.withDraw = function (amount){
    //     this.balance -= amount;
    // }


    // const customer1 = new createCustomer("Ravi", "hdfc", 10000);

    // const customer2 = new createCustomer("Sowmya", "icici", 10000);

    // console.log(customer1);
    // console.log(customer2);

    // customer1.withDraw(5000);
    // customer2.withDraw(4000);

    // console.log(customer1);
    // console.log(customer2);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // class createCustomer {
    //     constructor(name,bank, balance){
    //         this.name = name;
    //         this.bank = bank;
    //         this.balance = balance;
    //     }
    //     withDraw(amount){
    //         this.balance -= amount;
    //     }
    // }

    // const customer1 = new createCustomer('Ravi', 'Swiss', 35000);
    // const customer2 =  new createCustomer('Sowmya', 'icici', 45000);

    // console.log(customer1);
    // console.log(customer2);

    // customer1.withDraw(20000);
    // customer2.withDraw(30000);

    // console.log(customer1);
    // console.log(customer2);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // function createSavingsAccount(name,bank, balance){
    //     this.name = name;
    //     this.bank = bank;
    //     this.balance = balance;
    // }

    // const customer1 = new createSavingsAccount('Ravi','hdfc', 500);
    

    // createSavingsAccount.prototype.withDraw = function (amount){
    //     this.balance -= amount; 
    // }

    // customer1.withDraw(200);
    


    // function createCurrentAccount(name, bank, balance, withDrawLimit){
    //     createSavingsAccount.call(this,name,bank,balance);
    //     this.withDrawLimit = withDrawLimit;
        
    // }

    // createCurrentAccount.prototype.__proto__ = createSavingsAccount.prototype;

    // const customer2 = new createCurrentAccount('Sowmya', 'SBI', 500, 100000);

    // createCurrentAccount.prototype.businessLoan = function (amount){
    //     console.log(`You are eligible for a loan of ${amount}`);

    // }   
    
    
    // console.log(customer2);

    // customer2.businessLoan(50000);

    // customer2.withDraw(200);

    // console.log(customer2);


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    // class createSavingsAccount{
    //     constructor(name,bank,balance){
    //         this.name = name;
    //         this.bank = bank;
    //         this.balance = balance;
    //     }
    //     withDraw(amount){
    //         this.balance -= amount;
    //     }
    // }

    // class createCurrentAccount extends createSavingsAccount{
    //     constructor(name, bank, balance, withDrawLimit){
    //         super(name,bank, balance);
    //         this.withDrawLimit = withDrawLimit;
    //     }

    // }
    // const customer1 = new createSavingsAccount('ammu', 'grameenBank', 3456);
    // console.log(customer1);

    // const customer = new createCurrentAccount('Ravi', 'swiss', 3459, 100000);

    // customer.withDraw(459);
    // console.log(customer);

    