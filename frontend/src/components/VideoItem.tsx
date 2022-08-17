import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import { TiDelete } from 'react-icons/ti'
import { Video } from '../interfaces/video'
import * as videoService from "../services/VideoService";
import { useState } from 'react'
import { Button } from '../views/VideoForm'

type Props = {
    video: Video,
    loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
    const navigate = useNavigate()
    const[show, setShow] = useState(false)

    const handleDelete = async (id: string) => {
        await videoService.deleteVideoById(id);
        loadVideos()
    }

    return (
        <Wrapper>
            <div>
                <h1 onClick={() => navigate(`/video/${video._id}`)}>{video.title}</h1>
                <div onClick={() => video._id && handleDelete(video._id)}><TiDelete fontSize={32} color="red" /></div>
            </div>
            {<>
                {
                    video.description.length > 100 ? <div>
                        <p>{!show ? video.description.substring(0, 82) + '...' : video.description}</p>
                        <Button onClick={() => setShow(!show)}>{show ? 'See less...' : 'See more...'}</Button>
                    </div> : <p>{video.description}</p>
                }
            </>}
            <ReactPlayer
                url={video.url}
                width="100%"
                height="100%"
                controls={true} />
        </Wrapper>
    )
}

const Wrapper = styled.div`

    width: 100%;
    background-color: white;
    padding: 1rem;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 25%);
    border-radius: var(--border-radius);
    > p {
        margin: 0;
    }
    >div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > h1 {
        margin: .4rem 0;
        cursor: pointer;
        }
        div{
            cursor: pointer
        
    }
    }
`

export default VideoItem