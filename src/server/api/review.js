let ReviewModel = require('../model/review')

module.exports = (app) => {

    app.post('/api/restaurantReviews', function (req, res) {


        console.log("fetching review by restaurant!!!!!!!!")
        try {
            ReviewModel.find({ title: req.body.name, location: req.body.location })
                .then(doc => {
                    res.json({ reviews: doc });
                })

        } catch (e) {
            console.log("catch from restaurant reviews")
    }
})

    app.post('/api/getUsersReviews', function (req, res) {


        console.log("fetching review by user!!!!!!!!")
        console.log(req.body.userName)
        try {
            ReviewModel.find({ author: req.body.userName })
                .then(doc => {
                    res.json({ reviews: doc });
                })

        } catch (e) {
            console.log("catch from name")
        }
    })

    app.post('/api/saveReview', function (req, res) {
        console.log("Saving")
        console.log(req.body.userName)
        let newReview = new ReviewModel({
            author: req.body.userName,
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
        })
        console.log(newReview)
        newReview.save(function (err, newReview) {
            if (err) {
                console.log("fail!!!")
                console.log(err)
            } else {
                console.log("success!!!")
            }
        });
        ReviewModel.find({ author: req.body.userName })
            .then(doc => {
                res.json({ reviews: doc });
            })
    })
    app.post('/api/editReview', function (req, res) {
        console.log("in edit backend")
        console.log("this is the name: "  + req.body.userName)
        console.log("this is the title: " + req.body.review.title)
        console.log("this is the city: " + req.body.review.location)
        ReviewModel.findOne({ author: req.body.userName, title: req.body.review.title, location: req.body.review.location }).then(doc => {
            console.log("did i found?")
            console.log(doc)
        })
        ReviewModel.findOneAndUpdate({ author: req.body.userName, title: req.body.review.title, location: req.body.review.location },
            {
                imgs: req.body.review.imgs,
                bq: req.body.review.bq,
                sk: req.body.review.sk,
                clean: req.body.review.clean,
                dtq: req.body.review.dtq,
                ds: req.body.review.ds,
                fq: req.body.review.fq,
                title: req.body.review.title,
                location: req.body.review.location, 
                author: req.body.userName
            }, { new: true }, () => { })
        ReviewModel.findOne({ author: req.body.userName, title: req.body.review.title, location: req.body.review.location}).then(doc=> {
            console.log("the new reviews are: ")
            console.log(doc)
        })
        ReviewModel.find({ author: req.body.userName })
            .then(doc => {
                res.json({ reviews: doc });
            })
    }
    )

    app.post('/api/deleteReview', function (req, res) {
        console.log(req.body.userName)
        console.log(req.body.title)
        console.log(req.body.location)
        ReviewModel.findOneAndRemove({ author: req.body.userName, title: req.body.title, location: req.body.location }, () => { })
        ReviewModel.findOne({ author: req.body.userName }).then(doc => {
            console.log("this is after delte")
            console.log(doc)
        })
        ReviewModel.find({ author: req.body.userName })
            .then(doc => {
                res.json({ reviews: doc });
            })
    }
    )

    app.post('/api/ReviewsByUser', function (req, res) {


        console.log("fetching review by user")
        console.log(req.body.userName)
        try {
            ReviewModel.find({ author: req.body.userName })
            .then(doc => {
                res.json({ reviews: doc });
            })
                
        } catch (e) {
            console.log("catch from name")
        }
    })


    app.get('/api/review/getByRestaurant', function (req, res) {

        console.log("fetching review by user")
        try {
            ReviewModel.find({}, (err, reviews) => {
                res.json(reviews);
            })
        } catch (e) {
            console.log("catch from name")
        }
    })
    }
