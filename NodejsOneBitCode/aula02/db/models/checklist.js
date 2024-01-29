const mongoose = require("mongoose");

const checkListSchema = new mongoose.Schema({
    nome:{
        type: String,
        required:true
    },
    done: {type: Boolean,default: false},
    checklist: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Task'
        }
    ]
});

const Usuario = mongoose.model('CheckList',checkListSchema);
module.exports = Usuario;

// parei na aula 18:46