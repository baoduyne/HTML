import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initwebRoutes = (app) => {
    router.get("/",homeController.getHomePage);

    router.get("/baoduy",(req,res)=>{
        return res.send("World");
    });

    router.get("/about",homeController.getAboutPage);

    return app.use("/",router);
}   


module.exports = initwebRoutes;