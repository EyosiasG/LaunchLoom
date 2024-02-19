import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
   // userID: String, 
    projectName: String, 
    projectSubtitle: String,
    projectDescription: String,
    //imagePublicID: String,
    //imageSecureURL: String,
    fundAmount: Number, 
    fundAmountReached: {
        type: Boolean,
        default: false
    },
    projectCategory: String, 
    publicationDate: { type: Date, default: Date.now },
    isFeatured: {type: Boolean, default: false}
});


const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
