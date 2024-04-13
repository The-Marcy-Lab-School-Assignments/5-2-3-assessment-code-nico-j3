const bankAccountFactory = (balance = 0) => {
  let totalBalance = balance
  return {
    checkBalance() {
      return totalBalance
    },
    add(money) {
      console.log(`$${money} added.`)

      totalBalance += money;
    },
    subtract(amount) {
      console.log(`$${amount} subtracted.`)
      totalBalance -= amount;
      // console.log(`$${amount} subtracted.`)

    }


  }

  // vv last curly vv
};




module.exports = {
  bankAccountFactory,
};
