var express = require('express');
var multer  = require('multer');
var fs  = require('fs');

var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<h1>Select File To Upload:</h1><br><input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
});

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = 'home/ubuntu/mnt/efs/fs1'; //check if this one exits
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({storage: storage}).array('files', 12);
app.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong:(");
        }
        res.end("Upload completed.");
    });
})

app.listen(8000);