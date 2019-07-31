let UserModel = require('../model/user')


module.exports = (app) => {

    app.post('/api/updateName', function (req, res){
        console.log('in name update')
        try {
            UserModel.updateOne(
                { "userName": req.body.oldUserName},
                { $set: { "userName": req.body.newUserName} },
                { upsert: true }
            );
        } catch (e) {
            print(e);
        }
    })

    app.post('/api/user/login', function (req, res) {
        console.log("in login")
        console.log(req.body.userName)
        console.log(req.body.password)
            UserModel.findOne({ userName: req.body.userName })
                .then(doc => {
                    console.log(doc)
                    if (doc != null) {
                            if (req.body.password != doc.password) {
                                res.json({ succeded: false, userName: req.body.userName, message: 'The password is incorrect!' })
                            }
                            else {
                                res.json({ succeded: true, userName: req.body.userName, message: '', location: doc.location, img: doc.img, reviews: doc.reviews })
                            }
                    }
                    else{
                        res.json({ succeded: false, userName: req.body.userName, message: 'You are not registered, please register first' })
                    }
                })
            });

    app.post('/api/user/register', function (req, res) {
        console.log('user register');
        UserModel.findOne({ userName: req.body.userName })
            .then(doc => {
                if (doc != null) {
                    res.json({ succeded: false, error: `User ${req.body.userName} already exists` });
                } else {
                    let { userName, location, img, password } = req.body;
                    let newUser = new UserModel({
                        userName,
                        password,
                        location,
                        img,
                        is_logged_in: false
                    });
                    newUser.save(function (err, newUser) {
                        if (err) {
                            res.json({ succeded: false, error: err })
                        } else {
                            res.json({ succeded: true });
                        }
                    });
                }
            })
    });

    app.get('/api/user/exists', function (req, res, next) {

        let {userName} = req.query;
        console.log("user name in exists backend" + userName)
        UserModel
            .findOne({ userName: userName }, (err, user) => {
                if(err){
                   next("error")
                }
                else {
                    res.json({ userName: userName, exists: !!user })
                }
            })
            
    })

   

}

   




