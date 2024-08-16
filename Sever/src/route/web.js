import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initwebRoutes = (app) => {
    router.get("/",homeController.getHomePage);

    router.get("/baoduy",(req,res)=>{
        return res.send("World");
    });

    router.get("/about",homeController.getAboutPage);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);
    router.get('/get-crud',homeController.displayGetCRUD);
    router.get('/deleteUser',homeController.deleteUser);
    return app.use("/",router);
}   


module.exports = initwebRoutes;