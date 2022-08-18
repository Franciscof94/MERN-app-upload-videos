import axios from 'axios';
import { Video } from '../interfaces/video';

const HOST = process.env.REACT_APP_API || 'https://localhost:4000/api/videos';

export const getVideos = async () => {
    return await axios.get<Video[]>('https://mern-app-upload-videos.herokuapp.com/api/videos');
}

export const getVideo = async (id: string) => {
    return await axios.get<Video>(`https://mern-app-upload-videos.herokuapp.com/api/videos/${id}`)
}

export const createVideo = async (video: Video) => {
    return await axios.post<Video>('https://mern-app-upload-videos.herokuapp.com/api/videos', video)
}

export const updateVideo = async (id: string, video: Video) => {
    return await axios.put(`https://mern-app-upload-videos.herokuapp.com/api/videos/${id}`, video)
}

export const deleteVideoById = async (id: string) => {
    return await axios.delete(`https://mern-app-upload-videos.herokuapp.com/api/videos/${id}`)
}