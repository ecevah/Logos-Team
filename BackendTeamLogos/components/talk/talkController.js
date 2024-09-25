const talkModel = require("./talkModel");
const mongoose = require('mongoose');

const talkController = {
    add: async(req, res) => {
        
        try {
            const { reservation_id,meetTime,Talk,word,comment} = req.body;
            
            const talk = await talkModel.create({              
               reservation_id
            });
            res.json({
                status: true,
                message: 'Added',
                talk
            })
        } catch (err) {
            res.json({
                status: false,
                message: 'Not Added',
                err: err
            })
        }
    },
    find: async (req, res) => {  
        try {
            const talk = await talkModel.aggregate([
                {
                    $match: {
                        reservation_id: new mongoose.Types.ObjectId(req.query.reservation_id)
                    }
                    
                },
                {
                    $unwind: "$emo" // separate each element of the "emo" array into separate documents
                },
                {
                    $sort: {
                        "emo.count": -1 // sort in descending order based on the "count" property of "emo"
                    }
                },
                {
                    $group: {
                        _id: "$_id", // group the documents back together based on their original "_id"
                        talk: { $push: "$$ROOT" } // combine the documents back into an array called "talk"
                    }
                },
                {
                    $project: {
                        _id: 0, // exclude the "_id" field from the final output
                        talk: 1 // include the "talk" array in the final output
                    }
                }
            ]);
            if(talk===[]){
                res.json({
                    status: false,
                    message:'Data not found'
                });
            }
    
            res.json({
                status: true,
                talk
            });
        } catch (err) {
            res.json({
                status: false,
                err: err.message
            });
        }
    },
    put: async (req,res ) => {
        const { meetTime, Talk, angry, sad, happy, suprised, disgust, fear, neutral, word, comment } = req.body;
        function findUniqueWordsWithCounts(arr) {
            const counts = {};
            
            // Dizideki her kelimenin sayısını hesapla
            arr.forEach(word => {
              counts[word] = counts[word] ? counts[word] + 1 : 1;
            });
            
            // Sadece farklı kelimeleri seç
            const uniqueWords = Object.keys(counts);
            
            // Farklı kelimelerin sayılarını bul
            const uniqueWordCounts = uniqueWords.map(word => ({ word, count: counts[word] }));
            
            return uniqueWordCounts;
          }
          const uniqueWordsWithCounts = findUniqueWordsWithCounts(word.split(','));
        try {
            const resId = await talkModel.findOne({reservation_id:req.query.reservation_id});
            const updatedTalk = await talkModel.findByIdAndUpdate( resId._id.toString(),
            { 
                meetTime: meetTime, 
                Talk: Talk,
                emo: {
                    anger : {
                        count: angry
                    },
                    sad: {
                        count: sad
                    },
                    happy: {
                        count: happy
                    },
                    surprised: {
                        count: suprised
                    },
                    disgust: {
                        count: disgust
                    },
                    fear: {
                        count: fear
                    },
                    neutral: {
                        count: neutral
                    }
                }, 
                word: uniqueWordsWithCounts,
                comment: comment 
            },
            { new: true }
            );
            res.json({
                status:true,
                message: 'complated',
                updatedTalk
            })
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
            }
            }
}

module.exports = talkController;