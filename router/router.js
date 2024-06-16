import { Router } from "express";
import controllers from "../controllers/controllers.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello, go to /transactions")
})

router.get("/transactions", controllers.getAllTransactions);
router.post("/transactions", controllers.addTransaction);

export default router;