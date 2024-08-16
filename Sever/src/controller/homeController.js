import db from'../models/index';
import CRUD from "../services/CRUDService"
let getHomePage = async (req,res) => {
    try{
        let data = await db.User.findAll();
        console.log("----------");
        console.log(data);
        console.log("----------");
        return res.render("homepage.ejs",{
            data: JSON.stringify(data)
        });
    }
    catch(e){
        console.log(e);
    }
}

let getAboutPage = (req,res) =>{
    return res.render("About/aboutpage.ejs");

}
let getCRUD = (req,res) => {
    return res.render("About/crud.ejs");
}
let postCRUD = async (req,res) =>{
    let message = await CRUD.createNewUser(req.body);
    console.log(message);
    return res.send("post crud from sever");
}

let displayGetCRUD = async (req,res) => {
let data = await CRUD.getAllUser();
    console.log("--------------");
    console.log(data);
    console.log("-------------");
return res.render('displayCRUD.ejs',{
    dataTable: data,
});
}

let deleteUser = async (req,res) =>{
    await CRUD.deleteUser();
    return res.send("done!");
}

module.exports = {
    getHomePage : getHomePage,
    getAboutPage : getAboutPage,
    getCRUD : getCRUD,
    postCRUD : postCRUD,
    displayGetCRUD : displayGetCRUD,
    deleteUser : deleteUser
}