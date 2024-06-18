import Transaction from "../models/transaction.js";

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addTransaction = async (req, res) => {
  try {
    const { type, comment, price } = req.body;
    const newTransaction = await Transaction.create({ type, comment, price });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export default { getAllTransactions, addTransaction };