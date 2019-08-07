let UserModel = require('../model/user')


module.exports = (app) => {

    app.post('/api/saveUserReview', function(req, res) {
        console.log("in ave review")
        UserModel.findOne({userName: req.body.userName})
            .then(doc => {
                const reviews = doc.reviews
                const new_review = {
                    title: req.body.review.title,
                    location: req.body.review.location,
                    bq: req.body.review.bq,
                    sk: req.body.review.sk,
                    clean: req.body.review.clean,
                    dtq: req.body.review.dtq,
                    ds: req.body.review.ds,
                    fq: req.body.review.fq,
                    imgs: req.body.review.imgs,
                    date: new Date()
                }
                reviews.push(new_review)
                UserModel.findOneAndUpdate({ userName: req.body.userName }, { reviews }, { new: true }, () => { })
                res.json({review: new_review , reviews})
            })
    })

    app.post('/api/delete/userReview', function (req, res) {
        console.log("in delete api")
        UserModel.findOne({userName: req.body.userName})
            .then( doc => {
                const reviews = doc.reviews
                const new_reviews = reviews.filter( review => {
                    return review.title != req.body.title || review.location != req.body.location
                })
                UserModel.findOneAndUpdate({ userName: req.body.userName }, { reviews: new_reviews }, { new: true }, () => { })
               
                res.json({ success: true, reviews: new_reviews})

            })
    })

    app.post('/api/edit/userReview' , function (req, res) {
        
            UserModel.findOne({userName: req.body.userName})
                .then( doc => {
                    const reviews = doc.reviews
                   
                    const review = reviews.filter(review => {
                        return review.title === req.body.title && review.location === req.body.location
                    })
                    Object.assign(review[0], { [req.body.tag]: req.body.stars  })
                    
                    reviews.splice(reviews.indexOf(review[0]), 1)
                    reviews.push(review[0])
                   
                    UserModel.findOneAndUpdate({ userName: req.body.userName }, { reviews }, { new: true }, () => { })
                    res.json({success: true, reviews: reviews})
                })

    })

    app.post('/api/updateLocation', function (req, res) {
        console.log("in location update")
        try {
            UserModel.findOneAndUpdate({ userName: req.body.userName }, { location: req.body.newLocation }, { new: true }, () => { })
            res.json({ newLocation: req.body.newLocation })
        } catch (e) {
            console.log("catch from location")
        }
    }
            )

    app.post('/api/updateName', function (req, res){
        console.log('in name update')
        try {
            UserModel.findOneAndUpdate({ userName: req.body.oldUserName }, { userName: req.body.newUserName}, {new: true}, () => {} )
            res.json({ newName: req.body.newUserName})
        } catch (e) {
            console.log("catch from name")
        }
    })

    app.get('/api/users/fetch', function (req, res) {

        console.log("It's fetching")
        try {
            UserModel.find({}, (err, users) => {
                res.json(users);
            })
        } catch (e) {
            console.log("catch from name")
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
                        reviews: [{ bq: 1, sk: 2, clean: 2, dtq: 3, ds: 4, fq: 5, title: 'BBB', location: "beer sheva", imgs: [] }]
                    });
                    newUser.save(function (err, newUser) {
                        if (err) {
                            res.json({ succeded: false, error: err })
                        } else {
                            res.json({ succeded: true, img });
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

   




