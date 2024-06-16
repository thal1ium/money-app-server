import Transaction from "../models/transaction.js";

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.render('transactions', { transactions })
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addTransaction = async (req, res) => {
  try {
    const { type, comment, price } = req.body;
    await Transaction.create({ type, comment, price });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export default { getAllTransactions, addTransaction };