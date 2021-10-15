import React from 'react';
import styled from 'styled-components';
import '../../App.css'


export default function Customization({update,points,create}) {

    return (
        <Scroll>
            <Form>
                <Input placeholder="Nombre del personaje" id="name" onChange={(e) => update(e)} />

                <SubTitle>Distribuya los {points} puntos</SubTitle>

                <label to="vitality">Vida:</label>
                <input onInput={(e) => update(e)} type="range" id="vitality" max="4" defaultValue="0"></input>

                <label to="attack">Ataque:</label>
                <input onInput={(e) => update(e)} type="range" id="attack" max="4" defaultValue="0"></input>

                <label to="def">Defensa:</label>
                <input onInput={(e) => update(e)} type="range" id="def" max="4" defaultValue="0"></input>

                <label to="magic">Magia:</label>
                <input onInput={(e) => update(e)} type="range" id="magic" max="4" defaultValue="0"></input>

                <label to="strength">Fuerza:</label>
                <input onInput={(e) => update(e)} type="range" id="strength" max="4" defaultValue="0"></input>

                <div onClick={create} className="button">
                    <a href="#">CREAR</a>
                </div>

            </Form>
        </Scroll>
    )
}


const Scroll = styled.div`
    background: url("https://png2.cleanpng.com/sh/7a0141dfbdd9b6769ba8868df46258e7/L0KzQYm3VMA2N6d8iZH0aYP2gLBuTgBieJZ3ReJqcnPrfbb1lL1xaaFAiud8LXmwRbLqVsg5bpZpSKk5MEaxQYS7UsE6PWM2TaQ7OUazRoSBWMU0QF91htk=/kisspng-paper-parchment-papyrus-i-5ac688fed07006.1342195215229606388538.png");
    background-size: 100% 100%;
    background-position:center;
    width:40%;
    height:105%;
    display:flex;
    background-repeat: no-repeat;
    font-family: 'MedievalSharp', cursive;
    font-size:20px;
    justify-content:center;
    align-items:center;
    font-weight:bold;
`
const Input = styled.input`
    display:block;
    background:transparent;
    font-weight:bold;
    width:100%;
    ::placeholder {
        color:#5e5e5e;
        font-weight:bold;
    }
    outline:none;

`
const Form = styled.form`
    width:50%;
`
const SubTitle = styled.h5`
    font-weight:bold;
    margin-top: 8px;
    margin-bottom:2px;
    text-decoration:underline;
`

