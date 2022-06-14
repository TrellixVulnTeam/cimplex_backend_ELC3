import express,{Request,Response,NextFunction} from "express";
import db from "../config/database.config";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "./model";
import TodoValidator from './validator/index'
import Middleware from './middleware/index'
import AddSellController from './controller/index'

db.sync().then(() => {
	console.log("connect to db");
});

const app = express();
app.use(express.json());

app.post('/create', TodoValidator.checkCreateTodo(),Middleware.handleValidationError, AddSellController.create )

app.get('/read', AddSellController.read)

app.get('/read/:id',TodoValidator.checkIdParam(),Middleware.handleValidationError,AddSellController.readByID)
app.put('/update/:id',TodoValidator.checkIdParam(),Middleware.handleValidationError,AddSellController.update)
app.delete('/delete/:id',AddSellController.deleteById)

app.listen(3000,()=>{
    console.log('server is running')
})



export default app;