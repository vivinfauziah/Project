const express = require("express");
const Womens = require("../models/womens");
const router = express.Router();

router.get("/:id", (req, res) => {
    
    Womens.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.get("/", (req, res) => {
    
    Womens.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.post("/", (req, res) => {
            
        let newObj = new Womens({
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
    
    Womens.findByIdAndRemove(req.params.id, (error, result) => {
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
    
    Womens.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
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