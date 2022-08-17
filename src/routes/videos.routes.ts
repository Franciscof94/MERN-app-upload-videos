import { Router } from 'express'
import { createVideo, deleteVideo, getVideo, getVideos, updateVideo } from '../controllers/videos.controllers'



const router = Router()

router.get('/api/videos', getVideos)

router.get('/api/videos/:id', getVideo)

router.post('/api/videos', createVideo)

router.put('/api/videos/:id', updateVideo)

router.delete('/api/videos/:id', deleteVideo)

export default router