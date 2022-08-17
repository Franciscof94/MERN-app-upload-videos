import { RequestHandler } from "express"
import Video from "../model/Video"


export const createVideo:RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({ url: req.body.url })
    if(videoFound) {
        return res.status(301).json({ message: "The URL already exists"})
    }
    const newVideo = new Video(req.body)
    const savedVideo = await newVideo.save()
    res.json(savedVideo)
}

export const getVideos:RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.json(videos)
    } catch (error) {
        res.json(error)
    }
}

export const getVideo:RequestHandler = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id )
        if(!video) return res.status(204).json()
        return res.json(video)
    } catch(error) {
        res.json(error)
    }
}

export const updateVideo:RequestHandler = async(req, res) => {
    try {
        const updateVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updateVideo) return res.status(204).json()
        return res.json(updateVideo)
    } catch (error) {
        return res.json(error)
    }
}

export const deleteVideo:RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findByIdAndDelete(req.params.id)
        if(!videoFound) return res.status(204).json()
        return res.json(videoFound)
    } catch (error) {
        return res.json(error)
    }
}