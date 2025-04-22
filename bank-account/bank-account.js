export class BankAccount {
  constructor() {
    this.money = 0;
    this.isOpen = false;
  }

  open() {
    if (this.isOpen === true) throw new ValueError();
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) throw new ValueError();

    this.isOpen = false;
    this.money = 0;
  }

  deposit(monto) {
    if (!this.isOpen) throw new ValueError();
    if (monto < 0) throw new ValueError();
    this.money += monto;
  }

  withdraw(monto) {
    if (!this.isOpen) throw new ValueError();
    if (monto <= 0) throw new ValueError();
    if (monto > this.money) throw new ValueError();
    this.money -= monto;
  }

  get balance() {
    if (!this.isOpen) throw new ValueError();
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
