const usersRout=require('./users.rout');
const allRouts = (app) => {
    app.get('/',(req, res, next)=>{
        res.json({m:"hellow"});
    });
    app.get('/.netlify/functions/api', function (req, res) {
        res.json({"MESSAGE":'Hello World'})
    });
    app.use('/.netlify/functions/api/user',usersRout)
    /*V1*/
}

module.exports = { allRouts };


