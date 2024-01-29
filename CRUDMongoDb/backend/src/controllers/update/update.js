const Model = require('../../database/model/model');

const UpdateNameTask = (id,newTask) => {
    const data = Model.findByIdAndUpdate(
        { _id:id},
        {$set: { task: newTask}},
        {new:true}
    );
    return data;
};
const UpdateDescription = (id,description) => {
    const Description = Model.findByIdAndUpdate(
        {_id: id},
        {$set: {description: description}},
        {new:true}
    )
    return Description;
}
const UpdateDone = (id) => {
    return Model.findByIdAndUpdate(
        {_id: id},
        {$set: {done:true}},
        {new:true}
    )
}
module.exports = {
    UpdateNameTask,
    UpdateDescription,
    UpdateDone
};