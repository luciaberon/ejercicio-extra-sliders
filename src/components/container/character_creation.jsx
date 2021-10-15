import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../../context/Context'
import Character from '../pure/character_view';
import Customization from '../pure/customization_component';
import { determineClass } from '../assets/determineClass';
import { classes } from '../assets/classes.json';
import styled from 'styled-components';

function CreationComponent() {

    const [points, updatePoints] = useState(15);
    const [characterClass, setClass] = useState('fighter');
    const { setCharacters, charactersList } = useContext(Context);


    const [characterInfo, setInfo] = useState(
        {
            name: '',
            className: characterClass,
            image: classes.fighter.img,
            description:classes.fighter.description,        
            vitality: 0,
            strength: 0,
            attack: 0,
            def:0,
            magic: 0
        }  
    )
    const updateInfo = e => {
        if (points < 0 || sumPoints({...characterInfo, [e.target.id]: parseInt([e.target.value][0])}) < 0) {
            e.target.value = characterInfo[e.target.id];
        } else if (points >= 0) {
            setInfo(
                {
                    ...characterInfo,
                    [e.target.id]: e.target.value
                }
            )
         }
    }

    const createCharacter = () => {  
        if (characterInfo.name.length === 0) {
            alert("No deje el nombre vacío!")
        } else if (characterInfo.vitality < 3) {
            alert("El mínimo de puntos de vitalidad es 3!")
        } else if (points > 0) {
            alert("Distribuya TODOS los puntos")
        } else {
            let arr = charactersList.concat(characterInfo)
            setCharacters(arr);
        }


    }

    useEffect(() => {
        updatePoints(sumPoints(characterInfo));
        setClass(determineClass(characterInfo));
        setInfo({
            ...characterInfo,
            className: characterClass,
            image:classes[characterClass].img,
            description:classes[characterClass].description
        })
      }, [points, characterInfo.vitality,characterInfo.attack,characterInfo.strength,characterInfo.magic,characterInfo.def]);


    return (
        <Section>
            <Customization points={points} update={updateInfo} create={createCharacter} />
            <Character info={characterInfo} />            
        </Section>
    )
}

export default CreationComponent;


const Section = styled.section`
  height: 100vh;
  display:flex;
  align-items:center;
  justify-content: space-around;

`
const sumPoints = object => {
    const stats = ["vitality","strength","magic","def","attack"];
    let total = 15;
    for (let i = 0; i<stats.length; i++) {  
        total -= object[stats[i]];
    }
    return total;
}

