const express = require("express");
const Article = require("../models/article");
const router = express.Router();

router.get("/:id", (req, res) => {
    
    Article.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.get("/", (req, res) => {
    
    Article.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.post("/", (req, res) => {
        
    if (!req.files.photo) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.photo;
    let date = new Date();
    let imageName = date.getTime() + ".png"
    
    image.mv("./collections/photo/" + imageName, (error) => {
            
        if (error) return res.status(500).send(error);
            
        let newObj = new Article({
            source : req.body.source,
            title : req.body.title,
            photo : "http://localhost:3300/photo/" + imageName,
            description : req.body.description
        });
            
        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else{
                res.json(newObj);
            }
        });
    
    });
    
});
    
router.delete("/:id", (req, res) => {
    
    Article.findByIdAndRemove(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json({ message : "Data deleted" })
        }
    });
        
});
    
router.put("/", (req, res) => {
        
    let newObj = {
        source : req.body.source,
        title : req.body.title,
        description : req.body.description
    };
    
    Article.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else {
            res.status(500).json({ message : "Data updated" })
        }
    });
    
});

module.exports = (function(){
    return router;
})();