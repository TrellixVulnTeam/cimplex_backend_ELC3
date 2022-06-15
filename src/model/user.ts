import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';


interface UserAttributes {
    id:string;
    name:string;
    email:string;
    password:string;
    // hashedPassword:string;
}

export class UserInstance extends Model<UserAttributes> {}

UserInstance.init(
	{
        id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		// hashedPassword: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// },
		
	},
	{
		sequelize: db,
		tableName: 'user',
	}
);