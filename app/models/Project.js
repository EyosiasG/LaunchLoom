import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    userID: String, 
    projectName: String, 
    projectNotion: String,
    projectDescription: String,
    projectImage: String, 
    fundAmount: Number, 
    fundAmountReached: Number, 
    projectType: String, 
    publicationDate: { type: Date, default: Date.now },
    closingDate: Date,
    isFeatured: {type: Boolean, default: false}
});


const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
