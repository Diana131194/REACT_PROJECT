let RegisterModel = require('../model/register')


const addUser = (userName, password, location, img) => {
    RegisterModel.
        create({ userName, password, location, img })
};

const checkIfExists = (name) => {
    console.log("check!!!")
    console.log(RegisterModel)
    RegisterModel.
        exists({ userName: name }).
        then(function (value) {
            return value;
        })
};

export { checkIfExists, addUser };