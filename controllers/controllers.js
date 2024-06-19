import Transaction from "../models/transaction.js";

class Controllers {
  getAllTransactions = async (req, res) => {
    try {
      const transactions = await Transaction.findAll();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  addTransaction = async (req, res) => {
    try {
      const { type, comment, price } = req.body;
      const newTransaction = await Transaction.create({ type, comment, price });
      res.status(201).json(newTransaction);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  deleteTransactionById = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTransaction = await Transaction.findByPk(id);

      if (deleteTransaction) {
        await deleteTransaction.destroy();
        res.status(204).json();
      } else {
        res.status(404).json({error: "Transaction not found"})
      }
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default Controllers;