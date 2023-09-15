import React from 'react'
import styled from 'styled-components'

const techData = {
    'react': 'https://res.cloudinary.com/iluiss/image/upload/v1694807176/Logos/k8a93zwxdpqnzwx4ud7g.png',
    'django': 'https://res.cloudinary.com/iluiss/image/upload/v1694809043/Logos/onir7p8kcfmklmff993u.png',
    'bootstrap': 'https://res.cloudinary.com/iluiss/image/upload/v1694807195/Logos/bdi4e0lbazyf9quded8w.png',
    'springboot': 'https://res.cloudinary.com/iluiss/image/upload/v1694807176/Logos/ou2q47pq89mojhbqqqmk.png',
    'springsecurity': 'https://res.cloudinary.com/iluiss/image/upload/v1694811200/Logos/rnfhqltjjk7jcqbho5yp.webp',
    'postgre': 'https://res.cloudinary.com/iluiss/image/upload/v1694810694/Logos/aikc6klo7udmmcgzgyhl.png',
    'mysql': 'https://res.cloudinary.com/iluiss/image/upload/v1694810847/Logos/kb4bzuj4ycxbsuf47qik.png',
    'css': 'https://res.cloudinary.com/iluiss/image/upload/v1694807176/Logos/lrgmfhrjnxbom2w3jnyz.png',
    'swagger': 'https://res.cloudinary.com/iluiss/image/upload/v1694811113/Logos/utssjj8wb0vuq1zy4x12.png',
    'python': 'https://res.cloudinary.com/iluiss/image/upload/v1694811632/Logos/kjydbpkrhsj3ubgoumv0.png',
    'opencv': 'https://res.cloudinary.com/iluiss/image/upload/v1694811707/Logos/sthghslkjiwzlfdlnu7k.png',
    'sklearn': 'https://res.cloudinary.com/iluiss/image/upload/v1694811709/Logos/ukjggbdi5pujtv11sv5a.png'
}

const ProjectContainer = styled.div`
    display: flex;
    padding: 40px 20px;
    gap: 10px;
`

const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #282828;
    padding: 5px;
    border-radius: 0px 10px 10px 0px;
    gap: 15px;
`
const imgTech = styled.img`
`
export const ProjectComponent = ({ title, description, imgL, tech, repo, video, type }) => {
    return (
        <ProjectContainer >

            <div className=''>
                <h2>{title}</h2>
                <h3>{type}</h3>
                <p>{description}</p>
                <a href={repo}></a>
            </div>

            <img className='imgProj' src={imgL} alt="" srcset="" />
            <TechContainer>
                {
                    tech.map((name) => <img style={{ width: "40px" }} src={techData[name]}></img>)
                }

            </TechContainer>
        </ProjectContainer>
    )
}
