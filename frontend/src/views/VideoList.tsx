import { useEffect, useState } from 'react'
import styled from 'styled-components'
import VideoItem from '../components/VideoItem';
import { Video } from '../interfaces/video';
import * as videoService from "../services/VideoService";
import Screen from '../styles/Screen';

const VideoList = () => {
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState<Video[]>([]);


  const loadVideos = async () => {
    const { data } = await videoService.getVideos()
    const formatedVideos = data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatedVideos);
    setLoading(false)
  }

  useEffect(() => {
    loadVideos()
  })


  return (
    <Wrapper>
      {loading ? <Spinner />
        :
        <Container>
          {
            videos ? videos.map(video => (
              <div>
                <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
              </div>
            )) : <div>There are no videos yet</div>
          }
        </Container>}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`
const Spinner = styled.div`
   border: 4px solid var(--blue-color);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border-left-color: transparent;
    animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Container = styled.div`
  margin: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  ${Screen.sm`
    grid-template-columns: 1fr 1fr;
  `}
  ${Screen.md`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

export default VideoList