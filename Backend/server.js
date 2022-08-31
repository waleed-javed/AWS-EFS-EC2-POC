var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'home/ec2-user/efs-mount-point/' + files.filetoupload.originalFilename;
      var rawData =  fs.readFileSync(oldpath); //read data from old file
    
      fs.writeFile(newpath,rawData, function (err) {
          if (err) {console.log(err)};
          res.write('File uploaded and moved!').end();});
    //remove file to clean the tmp storage  
      fs.rm(oldpath); 
    
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<h1>Select File To Upload:</h1><br><input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8000,()=>{
  console.log('Server Running on Port: 8000');
}); 