import styled from 'styled-components'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';
import { ModalProject } from './ModalProject';

const techData = {
    'react': 'https://res.cloudinary.com/iluiss/image/upload/v1694807176/Logos/k8a93zwxdpqnzwx4ud7g.png',
    'django': 'https://res.cloudinary.com/iluiss/image/upload/v1694809043/Logos/onir7p8kcfmklmff993u.png',
    'bootstrap': 'https://res.cloudinary.com/iluiss/image/upload/v1694807195/Logos/bdi4e0lbazyf9quded8w.png',
    'springboot': 'https://res.cloudinary.com/iluiss/image/upload/v1694807176/Logos/ou2q47pq89mojhbqqqmk.png',
    'springsecurity': 'https://res.cloudinary.com/iluiss/image/upload/v1694811200/Logos/rnfhqltjjk7jcqbho5yp.webp',
    'postgre': 'https://res.cloudinary.com/iluiss/image/upload/v1694810694/Logos/aikc6klo7udmmcgzgyhl.png',
    'mysql': 'https://images.ctfassets.net/co0pvta7hzrh/20sNyoKJaAAWwG0k0qoGQg/1a4b5e6e4566c7cea6ebab887aeac060/image.png',
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

  @media screen and (max-width: 900px) {
    flex-direction:  column-reverse;
    max-width: 340px;
    
    
  }

    
`

const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: #282828;
    padding: 5px;
    border-radius: 0px 0px 10px 10px;
    gap: 15px;
    
    @media screen and (max-width: 900px)  {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
        
    }
`
const ImgCont = styled.div`
    display: flex;
    width: auto;
    
    @media screen and (max-width: 900px)  {
        flex-direction: column; 
    }
`

const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;
`;
export const ProjectComponent = ({ title, description, imgL, tech, repo, video, type, link }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ProjectContainer >

            <div className=''>
                <h2 className='titlee'>{title}</h2>
                <h3 className={type[0]}>{type}</h3>
                <p className='text-project'>{description}</p>
                <a href={repo}></a>

                <div className='info-project'>
                    {
                        video ? <span video={video} className='clickable' onClick={() => setModalShow(true)}><i class="fa-solid fa-video"></i></span> : ''
                    }
                    {
                        link ? <SocialIcon className='clickable' href={link}><i class="fa-solid fa-link"></i></SocialIcon> : ''

                    }

                    <SocialIcon href={repo}><i class="fa-brands fa-github"></i></SocialIcon>

                </div>
            </div>

            <ImgCont>
                <img className='imgProj' src={imgL} alt="" srcset="" />
                <TechContainer>
                    {
                        tech.map((name) => <div class="tooltip">
                            <span class="tooltip-content">{name.toUpperCase()}</span>
                            <img className='techimg' alt={name} src={techData[name]}></img>
                        </div>
                        )
                    }
                </TechContainer>
            </ImgCont>

            <ModalProject show={modalShow}
                video={video}
                title={title}
                onHide={() => setModalShow(false)}
            ></ModalProject>

        </ProjectContainer >
    )
}
