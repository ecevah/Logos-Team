const ClientModel = require("./clientModel.js");
const { json } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const clientModel = require("./clientModel.js");
const nodemailer = require('nodemailer');
const psycModel = require('../psychologist/psychologistModel.js');
const path = require('path');


require('dotenv').config();

const multer = require('multer');

// Multer ayarları
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

const upload = multer({ storage });


const clientController = {
    login: async(req, res) => {
        try {
            const client = await ClientModel.findOne({ eMail: req.body.email });
            let compare = bcrypt.compareSync(req.body.pass, client.pass);
            if (compare) {
                const token = jwt.sign({
                    client
                }, process.env.SECRET_KEY_LOGER, {expiresIn:'6h'})
                res.json({
                    status: true,
                    message: 'Login Succesful',
                    token: token,
                    client
                })
            } else {
                res.status(400).json({
                    status: false,
                    message: 'Login Wrong Data'
                })
            }

        } catch (err) {
            res.status(400).json({
                status: false,
                message: 'Login UnSuccesful',
                err: err
            })
        }
    },
    find: async(req, res) => {
        try {
            const client = await ClientModel.findById(req.params.id);
            res.json({
                status: true,
                message: 'Find Complated',
                value: { client }
            })
        } catch (err) {
            res.json({
                status: false,
                message: 'Find Not Complated',
                err: err
            })
        }
    },
    findSpecific: async(req, res) => {
        try {
            let { name, surname, job, county, email , birth, identity, limit, skip} = req.query;
            let func = 1;
            if(sort=='asc'){
                func = -1;
            }
            const client = await ClientModel.find({
                $or: [
                    {name:name},
                    {surName: surname},
                    {eMail: email},
                    {job},
                    {county},
                    {identityNumber:identity},
                    {dateOfBirth:birth},
                    //{city}
                ] 
            }).limit(limit).skip(skip)
            res.json({
                status: true,
                message: 'Find Complated',
                value: { client }
            })
        } catch (err) {
            res.json({
                status: false,
                message: 'Find Not Complated',
                err: err
            })
        }
    },
    all: async(req, res) => {
        try {
            const clients = await ClientModel.find({});
            res.json({
                status: true,
                message: 'Find Complated',
                value: { clients }
            });
        } catch (err) {
            res.json({
                status: false,
                message: 'Find Not Complated',
                err: err
            })
        }

    },
    /*create: async(req, res) => {
        try {
            
            const { name, surname, pass, email,*//*birth*//* city, county, job, about,sex,image} = req.body;
            let passHash = await bcrypt.hash(pass, 8);
            //const date = new Date(birth);
            const client = await ClientModel.create({
                name,
                surName: surname,
                pass: passHash,
                eMail: email,
                //dateOfBirth: date,
                city,
                county,
                job,
                about,
                sex,
                image
            });
            const token = jwt.sign({
                client
            }, process.env.SECRET_KEY_LOGER, {expiresIn:'6h'})
            res.json({
                status: true,
                message: 'Added',
                token,
                value: { client }
            })
        } catch (err) {
            res.json({
                status: false,
                message: 'Not Added',
                err: err
            })
        }
    },*/
    create: async(req, res) => {
        try {
          const storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, './public/uploads')
            },
            filename: function (req, file, cb) {
              cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
            }
          });
        
          const upload = multer({ storage: storage }).single('image')
          upload(req, res, async (err) => {
            if (err) {
              return res.json({
                status: false,
                message: 'Not Added',
                error: err
              })
            } else {
              const { name,birth, surname, pass, email, city, county, job, about,sex} = req.body;
              console.log(req.body);
              const image= req.file.filename;
              let passHash = await bcrypt.hash(pass, 8);
              const date = new Date(birth);
              const client = await ClientModel.create({
                name,
                surName: surname,
                pass: passHash,
                eMail: email,
                //dateOfBirth: date,
                city,
                county,
                job,
                about,
                sex,
                image:image
              });
              
              res.json({
                status: true,
                message: 'Added',
                
                client
              })
            }
          });
        } catch (err) {
          res.json({
            status: false,
            message: 'Not Added',
            err: err.message
          });
        }
      },
      
    delete: async(req, res) => {
        try {
            const client = await ClientModel.findByIdAndDelete(req.params.id);
            res.json({
                status: true,
                message: `${req.body.id} Deleted`
            })
        } catch (err) {
            res.json({
                status: true,
                message: `${req.body.id}`,
                err: err
            })
        }
    },
    update: async(req, res) => {
        try {
            const client = await ClientModel.findByIdAndUpdate(req.params.id ,req.body, { new: true });
            res.json({
                status: true,
                message: `${req.params.id} Updated`,
                value: { client }
            })
        } catch (err) {
            res.json({
                status: false,
                message: "Data not update",
                err: err
            })
        }
    },
    findMail: async(req,res) => {
        try{
            const client = await ClientModel.aggregate([
                {
                    $match: {
                        eMail: req.query.email
                    }
                },
                {
                    $project: {
                        _id: 1,
                        eMail:1
                    }
                }
            ]);
            const token = jwt.sign({
                client
            }, process.env.SECRET_KEY_LOGER, {expiresIn:'6h'})
            if(client==''){
                res.json({
                    status: false,
                })
            }else{
            res.json({
                status: true,
                token
            })}
        }catch(err){
            res.json({
                status: false,
                err
            })
        }
    },
    passUpdate: async(req,res) => {
        try{
            const decoded = jwt.verify(req.body.token, process.env.SECRET_KEY_LOGER);
            let passHash = await bcrypt.hash(req.body.pass, 8);
            const client = await clientModel.findByIdAndUpdate(decoded.client[0]._id, {pass:passHash}, {new:true})
            if(client=={}){
                res.json({
                    status: false,
                    message: "Pass Update",
                    client
                })
            }
            res.json({
                status: true,
                message: "Pass Update",
                client
            })
        }catch(err){
            res.json({
                status: false,
                message: "Pass Not Updated",
                err
            })
        }
    },
    test: async(req,res) => {
        try{
            const decoded = jwt.verify(req.body.token, process.env.SECRET_KEY_LOGER);
            const client = await clientModel.findByIdAndUpdate(decoded.client._id, {pass:req.body.pass}, {new:true})
            res.json({
                status: true,
                message: "Pass Update",
                client
            })
        }catch(err){
            res.json({
                status: false,
                message: "Pass Not Updated",
                err
            })
        }
    },
    favoricreate: async(req, res) => {
    try {
            const client = await clientModel.findByIdAndUpdate(req.body.id,
                {$push:{favorites:req.body.favorites}}, {new:true})
            
            res.json({
                status: true,
                message: 'Add',
            
            })
        } catch (err) {
            res.json({
                status: false,
                message: 'Not Added',
                err: err
            })
        }
    },
    lookup_favori: async(req, res) => {
        try {
            const client = await ClientModel.findById(req.params.id);
            res.json({
                status: true,
                message: 'Find Complated',
                value: client.favorites
            })
        } catch (err) {
            res.json({
                status: false,
                message: 'Find Not Complated',
                err: err
            })
        }

    },
    favoridelete: async(req, res) => {
        try {
            const client = await clientModel.findByIdAndUpdate(req.body.id,
                {$pull:{favorites:req.body.favorites}}, {new:true})
                
                res.json({
                    status: true,
                    message: 'Add',
                
                })
            } catch (err) {
                res.json({
                    status: false,
                    message: 'Not Added',
                    err: err
                })
            }
    },
// Controller metodu
    deneme: async (req, res) => {
    try {
        const { name, surname, pass, email, city, county, job, about, sex } = req.body;
        let passHash = await bcrypt.hash(pass, 8);
        const uploadedImage = req.file;
        const client = await ClientModel.create({
        name,
        surName: surname,
        pass: passHash,
        eMail: email,
        city,
        county,
        job,
        about,
        sex,
        image: uploadedImage.filename // Veritabanına dosya adını ekle
        });
        const token = jwt.sign({
        client
        }, process.env.SECRET_KEY_LOGER, { expiresIn: '6h' });
        res.json({
        status: true,
        message: 'Added',
        token,
        value: { client }
        });
    } catch (err) {
        res.json({
        status: false,
        message: 'Not Added',
        err: err
        });
    }
    },
    

}

module.exports = clientController;