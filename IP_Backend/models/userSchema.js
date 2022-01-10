import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    pemail: String,
    dfemail: String,
    github: String,
    linkedin: String,
    phone: String,
    cohort: String,
    learning: String,
    trainer: String,
    grade: String,
    traineeFinishingDate: String

});

const User = new mongoose.model("User", userSchema);

export default User;