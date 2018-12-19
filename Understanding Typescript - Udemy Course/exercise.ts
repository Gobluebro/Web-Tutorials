//Try to be as explicit as possible and add Types to everything you can!

let bankAccount: { money: number; deposit: (value: number) => void } = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: any; hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
