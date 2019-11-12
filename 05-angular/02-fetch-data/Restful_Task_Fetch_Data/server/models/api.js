const mongoose = require('mongoose');
console.log('creating task model');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String, 
        required: [true, "Task title is required"],         
        minlength: 3
    }, 
    description: {
        type: String,          
        default: ""
    },
    completed: {
        type: Boolean, 
        required: true, 
        default: false
    },                
    }, {timestamps: true});  

    module.exports = mongoose.model('Task', TaskSchema);