var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())

app.get('/api/whoami', (req, res, next)=>{
    req.ipAdress = req.ip
    req.preferedLanguage = req.headers["accept-language"]
    req.software = req.headers["user-agent"]
    console.log(req.headers)
    next();
}, (req, res)=>{
    res.send({
       "ipaddress":  req.ipAdress,
       "language": req.preferedLanguage,
       "software": req.software
    })
}
)

var listener = app.listen(3000, function(){
    console.log("you are listening on "+listener.address().port)
})
