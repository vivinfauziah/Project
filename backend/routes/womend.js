const express = require("express");
const Womend = require("../models/womend");
const router = express.Router();

router.get("/:id", (req, res) => {
    
    Womend.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.get("/", (req, res) => {
    
    Womend.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});
    
router.post("/", (req, res) => {
            
        let newObj = new Womend({
            rank : req.body.rank,
            country : req.body.country,
            player1 : req.body.player1,
            player2 : req.body.player2,
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
    
    Mend.findByIdAndRemove(req.params.id, (error, result) => {
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
        player1 : req.body.player1,
        player2 : req.body.player2,
        points : req.body.points,
        tournament : req.body.tournament
    };
    
    Womend.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
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