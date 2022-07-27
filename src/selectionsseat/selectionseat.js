import "./selectionseat.css"
import axios from "axios"
import { useEffect, useState } from 'react'

function Seat({ name }) {
    return (
        <div className="seat">
            <p className="seatnumber">{name}</p>
        </div>
    )
}

export default function Selectionseat() {

    const [name, setName] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/7/seats')
        promise.catch(() => console.log('error'))
        promise.then((value) => {
            setName(value.data.seats)
        })
    }, [])

    return (
        <article className="control">
            <section className="section">
                <h1 className="selection"><p>Selecione o(s) assento(s)</p></h1>
            </section>

            <section className="sectionseat">
                {name.map((value, index) => (<Seat name={value.name} key={index} />))}
            </section>

            <section className="seattypes">
                <div className="type">
                    <div className="seat selected"></div>
                    <p className="seattext">Selecionado</p>
                </div>

                <div className="type">
                    <div className="seat"></div>
                    <p className="seattext">Disponível</p>
                </div>

                <div className="type">
                    <div className="seat close"></div>
                    <p className="seattext">Indisponível</p>
                </div>
            </section>

            {/* <section className="seactionbuy">
                <div className="namebody">
                    <p className="name">Nome do Comprador:</p>
                    <input></input>
                </div>

                <div className="cpfbody">
                    <p className="cpf">Nome do Comprador:</p>
                    <input></input>
                </div>

                <div className="buttonseat">
                    <p>Reservar assento(s)</p>
                </div>

            </section> */}


        </article>
    )

}