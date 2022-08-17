import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as videoService from "../services/VideoService";
import 'react-toastify/dist/ReactToastify.css';
import { Video } from '../interfaces/video';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Styled {
  backgroundColor?: boolean
}

const VideoForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const initialState = {
    title: '',
    description: '',
    url: ''
  }

  const[video, setVideo] = useState<Video>(initialState)

  const handleChange = (e: InputChange) => {
    setVideo({...video, [e.target.name]: e.target.value})
  }

  const getVideo = async (id: string) => {
    const { data } = await videoService.getVideo(id)
    const { title, description, url } = data
    setVideo({ title, description, url })
  }

  useEffect(() => {
    if(id) getVideo(id)
  }, [id])

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!id) {
      await videoService.createVideo(video)
      toast.success('Video created successfully')
    } else {
      await videoService.updateVideo(id, video)
    }
    navigate('/')
  }

  return (
    <Wrapper>

        <Form onSubmit={handleSubmit}>
          <h1>{id ? 'Update video' : 'Create new video'}</h1>
          <Input type="text" onChange={handleChange} name="title" placeholder="Title" value={video.title} />
          <Input type="text" onChange={handleChange} name="url" placeholder="Url" value={video.url} />
          <textarea name="description" onChange={handleChange} placeholder="Description" value={video.description} ></textarea>
          <Button backgroundColor={id ? true : false} >{id ? 'Update video' : 'Create video'}</Button>
        </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  height: calc(82vh - 71px);
  padding: 0 2rem;

`

const Input = styled.input`
  max-width: 100%;
  background-color: white;
  margin: 0.8rem 0;
  padding: .5rem;
  border: none;
  outline: none;
  border: 1px solid var(--black-color);
  border-radius: var(--border-radius);
`

const Form = styled.form`
   margin: 0 auto;
  width: 100%;
  max-width: 340px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 25%);
  border-radius: var(--border-radius);
  > h1 {
    margin: 0;
  }
  > textarea {
    resize: none;
    outline: none;
    padding: .5rem;
    border-radius: var(--border-radius);
  }
`

export const Button = styled.button<Styled>`
  margin-top: 1rem;
  background-color: ${props => props.backgroundColor ? 'var(--pink-color)' : 'var(--blue-color);'};
  border: none;
  color: white;
  padding: .5rem 1rem;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  cursor: pointer
`

export default VideoForm