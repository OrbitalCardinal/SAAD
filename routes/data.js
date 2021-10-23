const express = require("express");
const router = express.Router()
const csvtojson = require("csvtojson");
const path = require("path");

router.post("/data", (req, res, next) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let data = req.files.data;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            data.mv('./uploads/' + data.name);

            csvtojson()
                .fromFile(path.join(__dirname, "../uploads/iris.csv"))
                .then((jsonObj) => {
                    //send response
                    res.send({
                        status: true,
                        message: 'File is uploaded',
                        data: {
                            name: data.name,
                            mimetype: data.mimetype,
                            size: data.size,
                            datajson: jsonObj
                        }
                    });
                })
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;