import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./selectionhour.css"
import Footer from "../footer/footer"
import axios from "axios"

export default function Selectionhour() {

    const params = useParams();

    const [hour, setHour] = useState([])
    const [img, setimg] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.HourID}/showtimes`)
        promise.catch(() => console.log('error'))
        promise.then((value) => {
            setHour(value.data.days)
            setimg(value.data)
        })
    }, [])

    return (
        <>
            <article>
                <section className="section">
                    <h1 className="selection">Selecione o horário</h1>
                </section>

                <section className="sectionsinfos">

                    {hour.map((value, index) => (

                        <div className="infosbody" key={index}>
                            <p className="infoday">{value.weekday} - {value.date}</p>
                            <div className="buttonsbody">

                                {value.showtimes.map((session, index) => (
                                    <Link to={`/seat/${session.id}`} style={{ textDecoration: 'none' }}>
                                        <div className="buttonhour" key={index}>
                                            <p className="buttontext">{session.name}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                </section>
            </article>

            <Footer url={img.posterURL} title={img.title} />
        </>
    )
}