import mongoose from 'mongoose';

const createuserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const CreateUser = new mongoose.model("CreateUser", createuserSchema);

export default CreateUser;

