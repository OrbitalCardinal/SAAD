const express = require("express");
const router = express.Router()
const csvtojson = require("csvtojson");
const path = require("path");
const Papa = require("papaparse");
const fs = require('fs');


router.get("/data", (req, res, next) => {
    res.json({
        messaeg: "Hello"
    });
});
router.post("/data", (req, res, next) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let data = req.files.file;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            data.mv('./uploads/' + data.name);

            const csv_file = fs.createReadStream(path.join(__dirname, "../uploads/iris.csv"));
            Papa.parse(csv_file, {
                header: true,
                delimiter: ",",
                complete: (result) => {
                    res.send({
                        status: true,
                        message: 'File is uploaded',
                        data: {
                            name: data.name,
                            mimetype: data.mimetype,
                            size: data.size,
                            datajson: result.data
                        }
                    })
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = router;