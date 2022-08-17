import { Schema, model } from 'mongoose';

const videosSchema = new Schema({
    title: {
        type: String,
        required: true,
        trimg: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
},{ 
    timestamps: true
})

export default model('Video', videosSchema)
