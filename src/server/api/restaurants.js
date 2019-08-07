const Restaurant = require('../model/restaurants');

module.exports = (app) => {
    app.get('/api/restaurants', function (req, res) {
        const { prefix } = req.query;
        const regexp = new RegExp("^" + prefix, "i");
        Restaurant.find({ name: regexp }, (err, restaurants) => {
            if (err) {
                next('Error occurred.');
            } else {
                res.status(200).json({ countries: restaurants.map(restaurant => ({ id: restaurant._id, label: restaurant.name })) });
            }
        });
    });

    app.get('/api/restaurants/fetch', function (req, res) {
        console.log("It's fetching")
        Restaurant.find({}, (err, restaurants) => {
            if (err) {
                // next('error Occured');
            }
            else {
               
                if (restaurants.length === 0) {
                    console.log("im in else!!!")
                    console.log("No restaurants")
                    
                    var Mcdonalds5 = new Restaurant({
                        name: "Mcdonalds",
                        city: "Beer Sheva"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })


                    var Mcdonalds4 = new Restaurant({
                        name: "Mcdonalds",
                        city: "Haifa"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })

                    var Mcdonalds3 = new Restaurant({
                        name: "Mcdonalds",
                        city: "Eilat"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })

                    var Mcdonalds2 = new Restaurant({
                        name: "Mcdonalds",
                        city: "Jerusalem"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })

                    var Nafis= new Restaurant({
                        name: "Nafis",
                        city: "Jerusalem"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })

                    var Japanika = new Restaurant({
                        name: "Japanika",
                        city: "Eilat"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })

                    var Burgers_Bar = new Restaurant({
                        name: "Burgers-Bar",
                        city: "Haifa"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })

                    var McDonalds = new Restaurant({
                        name: "McDonalds",
                        city: "Tel Aviv"
                        /*  location: {
                              type: "Point",
                              coordinates: [36.098948, -112.110492]
                          },*/
                    })

                    var BBB = new Restaurant({
                        name: "BBB",
                        city: "Beer Sheva"
                      /*  location: {
                            type: "Point",
                            coordinates: [36.098948, -112.110492]
                        },*/
                    })

                    var Kepesa = new Restaurant({
                        name: "Kepasa",
                        city: "Beer Sheva"
                       /* location: {
                            type: "Point",
                            coordinates: [33.098948, -112.110492]
                        },*/
                    })

                    var Kampai = new Restaurant({
                        name: "Kampai",
                        city: "Beer Sheva"
                       /* location: {
                            type: "Point",
                            coordinates: [32.098948, -112.110492]
                        },*/
                    })
                    var Kapara = new Restaurant({
                        name: "Kapara",
                        city: "Beer Sheva"
                       /* location: {
                            type: "Point",
                            coordinates: [31.098948, -112.110492]
                        },*/
                    })


                    BBB.save(function (err, BBB) {
                        if (err) {
                            console.log("bbb-" + err)
                        } else {
                            console.log("bbb success");
                        }
                    })
                    Kepesa.save(function (err, Kepesa) {
                        if (err) {
                            console.log("kepasa-" + err)
                        } else {
                            console.log("kepasa success");
                        }
                    })
                    Kampai.save(function (err, Kampai) {
                        if (err) {
                            console.log("kampai-" + err)
                        } else {
                            console.log("kampai success");
                        }
                    })
                    Kapara.save(function (err, Kapara) {
                        if (err) {
                            console.log("kapara-" + err)
                        } else {
                            console.log("kapara success");
                        }
                    })
                    McDonalds.save(function (err, McDonalds) {
                        if (err) {
                            console.log("McDonalds-" + err)
                        } else {
                            console.log("McDonalds success");
                        }
                    })
                    Burgers_Bar.save(function (err, Burgers_Bar) {
                        if (err) {
                            console.log("Burgers_Bar-" + err)
                        } else {
                            console.log("Burgers_Bar success");
                        }
                    })
                    Japanika.save(function (err, Japanika) {
                        if (err) {
                            console.log("Japanika-" + err)
                        } else {
                            console.log("Japanika success");
                        }
                    })
                    Nafis.save(function (err, Nafis) {
                        if (err) {
                            console.log("Nafis-" + err)
                        } else {
                            console.log("Nafis success");
                        }
                    })
                    Mcdonalds2.save(function (err, Mcdonalds2) {
                        if (err) {
                            console.log("Mcdonalds2-" + err)
                        } else {
                            console.log("Mcdonalds2 success");
                        }
                    })
                    Mcdonalds3.save(function (err, Mcdonalds3) {
                        if (err) {
                            console.log("Mcdonalds3-" + err)
                        } else {
                            console.log("Mcdonalds3 success");
                        }
                    })
                    Mcdonalds4.save(function (err, Mcdonalds4) {
                        if (err) {
                            console.log("Mcdonalds4-" + err)
                        } else {
                            console.log("Mcdonalds4 success");
                        }
                    })
                    Mcdonalds5.save(function (err, Mcdonalds5) {
                        if (err) {
                            console.log("Mcdonalds5-" + err)
                        } else {
                            console.log("Mcdonalds5 success");
                        }
                    })
                    
                }
                else {
                    console.log(JSON.stringify(restaurants));

                    res.json(restaurants);
                }
            }

        });

    })
};

