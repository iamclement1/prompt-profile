import { Schema, model, models } from "mongoose";
import User from "./user";

const ProfileSchema = new Schema({
   creator:{
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   prompt: {
      type: String,
      required: [true, 'Prompt is required'],
   },
   tag:{
      type: String,
      required: [true, 'Tag is required']
   }
});

const Profile = models.Profile || model('Profile', ProfileSchema);

export default Profile; 