import express,{Request,Response,NextFunction} from "express";
import db from "../config/database.config";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "./model";
import TodoValidator from './validator/index'
import Middleware from './middleware/index'

db.sync().then(() => {
	console.log("connect to db");
});

const app = express();
app.use(express.json());

app.post('/create', TodoValidator.checkCreateTodo(),Middleware.handleValidationError,  
    async (req:Request,res:Response)=>{
        const id = uuidv4();
            try {
                const record = await TodoInstance.create({ ...req.body, id });
                return res.json({ record, msg: "Successfully create todo" });
            } catch (e) {
                return res.json({ msg: "fail to create", status: 500, route: "/create" });
            }
})

app.get('/read', async (req:Request,res:Response)=>{
    try {
        // const limit = (req.query.limit as number | undefined) || 10;

        const records = await TodoInstance.findAll({ where: {} });
        return res.json(records);
    } catch (e) {
            return res.json({ msg: "fail to create", status: 500, route: "/create" });
        }
})

app.get('/read/:id',TodoValidator.checkIdParam(),Middleware.handleValidationError,async (req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        const record = await TodoInstance.findOne({ where: { id } });
        return res.json(record);
    } catch (e) {
        return res.json({ msg: "fail to read", status: 500, route: "/read/:id" });
    }
})
app.put('/update/:id',TodoValidator.checkIdParam(),Middleware.handleValidationError,async (req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        const record = await TodoInstance.findOne({ where: { id } });

        if (!record) {
            return res.json({ msg: "Can not find existing record" });
        }

        const updatedRecord = await record.update({ ...req.body, id });
        // const record = await TodoInstance.create({ ...req.body, id });
        return res.json({ record: updatedRecord });
    } catch (e) {
        return res.json({
            msg: "fail to read",
            status: 500,
            route: "/update/:id",
        });
    }
})
app.delete('/delete/:id',async (req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        const record = await TodoInstance.findOne({ where: { id } });

        if (!record) {
            return res.json({ msg: "Can not find existing record" });
        }

        const deletedRecord = await record.destroy();
        return res.json({ record: deletedRecord });
    } catch (e) {
        return res.json({
            msg: "fail to read",
            status: 500,
            route: "/delete/:id",
        });
    }
})

app.listen(3000,()=>{
    console.log('server is running')
})



export default app;