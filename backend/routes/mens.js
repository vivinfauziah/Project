const express = require("express");
const Mens = require("../models/mens");
const router = express.Router();

router.get("/:id", (req, res) => {
    
    Mens.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.get("/", (req, res) => {
    
    Mens.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.post("/", (req, res) => {
            
        let newObj = new Mens({
            rank : req.body.rank,
            country : req.body.country,
            player : req.body.player,
            points : req.body.points,
            tournament : req.body.tournament
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
    
router.delete("/:id", (req, res) => {
    
    Mens.findByIdAndRemove(req.params.id, (error, result) => {
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
        rank : req.body.rank,
        country : req.body.country,
        player : req.body.player,
        points : req.body.points,
        tournament : req.body.tournament
    };
    
    Mens.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
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