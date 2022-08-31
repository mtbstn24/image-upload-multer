const express = require("express");
const multer = require('multer');
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({dest: "uploads/"});

// const storage = multer.diskStorage({
//     destination:(req,file,cb) =>{
//         cb(null,"uploads")
//     },
//     filename: (req,file,cb) =>{
//         cb(null,req.body.filename)
//     }
// });

// const upload = multer({storage: storage});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/upload_files",upload.array("files"), uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({message: "Successfully uploaded files"});
}

app.listen(5000, () => {
    console.log('Server started...');
});