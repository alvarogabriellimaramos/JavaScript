const Model = require("../../database/model/model");

const Delete = (id) => {
    const data = Model.findOneAndDelete({
        _id:id
    });
    return data;
};

module.exports = Delete;