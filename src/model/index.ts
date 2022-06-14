import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';


interface TodoAttributes {
    id:string;
	customer_name: string;
	select_product: string;
	unit_price: number;
    unit_sold:number;
    sale:number;
    shipping_date:number;
    delivery:boolean;
    payment:boolean;
}

export class TodoInstance extends Model<TodoAttributes> {}

TodoInstance.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		customer_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		select_product: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: false,
		},
		unit_price: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: false,
		},
		unit_sold: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: false,
		},
		sale: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: false,
		},
		shipping_date: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: false,
		},
		delivery: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		payment: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		sequelize: db,
		tableName: 'sales',
	}
);