import React from 'react'
import styled from 'styled-components'

export default function Character({info}) {

    const { image, className, description } = info;
    console.log(image)
    return (
        <Card className="w-50 h-75">
            <ClassInfo>
                <ClassName>{className}</ClassName> 
                <p>{description}</p>
            </ClassInfo>
            <CharacterImage src={image}></CharacterImage>
        </Card>
    )
    }

const CharacterImage = styled.img`
    z-index:2;
    opacity:1;
    height:90%;
`

const ClassName = styled.h2`
    font-weight:bold;
    color:#D93746;
    text-decoration:underline;
    text-transform:capitalize;
`
const Card = styled.div`
    font-size:30px;
    font-weight:bold;
    font-family: 'MedievalSharp', cursive;
    display:flex;
    justify-direction:center;
    width:1000px;
    align-items:center;
    background-image:url('https://i2.lensdump.com/i/gVC48T.png');
    background-size:cover;
    background-repeat:no-repeat;
`

const ClassInfo = styled.div`
    margin-left:30px;
    width:80%;
`