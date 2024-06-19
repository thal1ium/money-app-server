import { Router } from "express";
import Controllers from "../controllers/controllers.js";

const router = Router();
const controller = new Controllers();

router.get("/", (req, res) => {
  res.send("Hello, go to /transactions")
})

router.get("/transactions", controller.getAllTransactions);
router.post("/transactions", controller.addTransaction);
router.delete("/transactions/:id", controller.deleteTransactionById);

export default router;