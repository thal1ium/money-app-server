import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Transaction = sequelize.define('Transaction', {
  "type": {
    type: DataTypes.STRING,
    allowNull: false,
  },
  "comment": {
    type: DataTypes.STRING,
    allowNull: false,
  },
  "price": {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Transaction;