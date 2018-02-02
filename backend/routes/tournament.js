const express = require("express");
const Tournament = require("../models/tournament");
const router = express.Router();

router.get("/:id", (req, res) => {
    
    Tournament.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.get("/", (req, res) => {
    
    Tournament.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.post("/", (req, res) => {
                
        let newObj = new Tournament({
            time : req.body.time,
            status : req.body.status,
            player1 : req.body.player1,
            player2 : req.body.player2,
            set1 : req.body.set1,
            set2 : req.body.set2,
            score1 : req.body.score1,
            score2 : req.body.score2,
            score3 : req.body.score3,
            score4 : req.body.score4
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
    
    Tournament.findByIdAndRemove(req.params.id, (error, result) => {
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
        status : req.body.status,
        set1 : req.body.set1,
        set2 : req.body.set2,
        score1 : req.body.score1,
        score2 : req.body.score2,
        score3 : req.body.score3,
        score4 : req.body.score4
    };
    
    Tournament.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
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