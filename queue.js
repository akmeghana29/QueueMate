import { DataTypes } from "sequelize";
export default (sequelize) => {
  return sequelize.define("Queue", {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    place: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    timeSlot: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM("booked","cancelled","completed"), defaultValue: "booked" },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
  }, { tableName: "queues", timestamps: true });
};
