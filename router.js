var totalRec = 0,
pageSize  = 5,
pageCount = 0;
var currentPage = 1;
app.get('/userdetails',  function (req, res) {
                Register.find({}).exec(function(err, Register) {
                   if (err) throw err;
                                totalRec      = Register.length;
                                pageCount     =  Math.ceil(totalRec /  pageSize);
                                if (typeof req.query.page !== 'undefined') {
                                                currentPage = req.query.page;
                                }
                                var start = 0;
                                if(currentPage >1){
                                                start = (currentPage - 1) * pageSize;
                                }
                                var data = [];
                                for(var i=start;i<start+pageSize;i++) {
                                                if(i < totalRec){
                                                                data.push(Register[i]);
                                                } else {
                                                                break;
                                                }
                                }
            res.render('userdetails.ejs', { "Register": Register, data:data, pageSize: pageSize, pageCount: pageCount,currentPage: currentPage});
                   });            
    });