import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Wrapper>
            <div>
                <div>
                    <Link to="/">My favorite Videos</Link>
                </div>
                <div>
                    <Link to="/new-video">Create New Video</Link>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: white;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 25%);
    display: flex;
    justify-content: center;
    > div {
        max-width: 1000px;
        padding: 1.3rem;
        width: 100%;
        margin: 0 2rem;
        display: flex;
        justify-content: space-between;
        > div {
            a {
                text-decoration: none;
                color: var(--black-color);
                font-weight: bold;
                font-size: 1.2em;
            }
        }
    }
`

export default Header