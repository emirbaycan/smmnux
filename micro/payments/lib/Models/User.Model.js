import { DataTypes, Model } from 'sequelize';
import sequelize from '../helpers/init_sequelize.js';
import bcrypt from 'bcrypt';

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING, 
  },
}, {
  sequelize,
  modelName: 'user'
});

export default User;