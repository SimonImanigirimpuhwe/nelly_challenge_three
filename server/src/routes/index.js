import {Router} from "express";
import albumController from "../controllers/album"

const albumRouter = new Router();


albumRouter.get("/:id", albumController);


export default albumRouter