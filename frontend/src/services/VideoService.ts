import axios from 'axios';
import { Video } from '../interfaces/video';

export const getVideos = async () => {
    return await axios.get<Video[]>('http://localhost:4000/api/videos')
}

export const getVideo = async (id: string) => {
    return await axios.get<Video>(`http://localhost:4000/api/videos/${id}`)
}

export const createVideo = async (video: Video) => {
    return await axios.post<Video>('http://localhost:4000/api/videos', video)
}

export const updateVideo = async (id: string, video: Video) => {
    return await axios.put(`http://localhost:4000/api/videos/${id}`, video)
}

export const deleteVideoById = async (id: string) => {
    return await axios.delete(`http://localhost:4000/api/videos/${id}`)
}