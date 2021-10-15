import React, { useContext, useEffect} from 'react'
import { Context } from '../../context/Context'
import Card from '../pure/card'
import styled from 'styled-components'

export default function CharacterList() {

    const { charactersList } = useContext(Context);

    useEffect(() => {
        console.log(charactersList)
        
    }, [charactersList]);

    return (
        <Section>
            {  charactersList.length === 0 && <h1 className="text-center pt-5">Empieza tu propia aventura! Crea tu personaje</h1>  }
            { charactersList.length > 3 && alert("Por ahora solo puede tener un máximo de 3 personajes.")}
 
            <CardContainer>
            { Array.isArray(charactersList) &&
                charactersList.slice(0,3).map((character,index) => 
                    <Card character={character} key={index} />       
                )
            }
            </CardContainer>

        </Section>
    )
}

const Section = styled.section`
    height:100vh;
    font-family:'MedievalSharp', cursive;
    font-weight:bold;
    background:url('https://i.lensdump.com/i/gVT5Kc.png');
    background-size: 90% 90%;
    background-position:center;

`
const CardContainer = styled.section`
    display:flex;
    justify-content:center;
    padding-top:20px;
    width:95%;
    flex-wrap:wrap;
`
