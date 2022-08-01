import { Link, useParams, useNavigate } from 'react-router-dom'
import "./selectionseat.css"
import axios from "axios"
import { useEffect, useState } from 'react'
import Footer from "../footer/footer"


function Seat({ name, available, cadeiras, setCadeiras, id}) {

    const [classe, setClasse] = useState('seat')
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
        if (available != true) {
            setClasse('seat close')
            setConfirm(!false)
        }
    })

    return (
        <div className={classe} onClick={() => {
            if (confirm === true) {
                setClasse('seat')
                setConfirm(false)
                cadeiras.filter((value) => id !== value)
                console.log(cadeiras)
            } else {
                setClasse('seat selected')
                setConfirm(true)
                setCadeiras([...cadeiras, id])
                console.log(cadeiras)
            }
        }}>

            <p className="seatnumber" available={confirm}>{name}</p>
        </div>
    )
}

export default function Selectionseat({setInfo}) {

    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState([])
    const [hour, setHour] = useState(null)
    const [cadeiras, setCadeiras] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.SeatID}/seats`)
        promise.catch(() => console.log('error'))
        promise.then((value) => {
            setName(value.data.seats)
            setHour(value.data)
        })
    }, [])


    const [buy, setBuy] = useState('')
    const [cpf, setCpf] = useState('')


    function handleForm(e) {
        e.preventDefault();

        const info = {
            ids: cadeiras,
            name: buy,
            cpf
        }

        const promise = axios.post(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`, info)
        promise.then(() => {
            info = {...info}
            setInfo(info)
            navigate('/sucess')})
    }

    return (
        <>
            <article className="control">
                <section className="section">
                    <h1 className="selection"><p>Selecione o(s) assento(s)</p></h1>
                </section>

                <section className="sectionseat">
                    {name.map((value, index) => (<Seat name={value.name} id={value.id} key={index} available={value.isAvailable} cadeiras = {cadeiras} setCadeiras = {setCadeiras}/>))}
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

                <form className="seactionbuy" onSubmit={handleForm}>
                    <div className="namebody">
                        <label for='formName' className="name">Nome do Comprador:</label>
                        <input type="text" id='formName' placeholder="Digite seu nome..." className="inputtext" onChange={(e) => setBuy(e.target.value)} />
                    </div>

                    <div className="cpfbody">
                        <label className="cpf" for='formCPF'>CPF do Comprador:</label>
                        <input type="text" id='formCPF' placeholder="Digite seu CPF..." className="inputtext" onChange={(e) => setCpf(e.target.value)} />
                    </div>

                    <div style={{ textDecoration: 'none' }}>
                        <button type='submit' className="buttonseat">
                            <p>Reservar assento(s)</p>
                        </button>
                    </div>

                </form>
            </article>

            {hour ? <Footer hour={hour.name} weekday={hour.day.weekday} url={hour.movie.posterURL} title={hour.movie.title} /> : <></>}
        </>
    )

}