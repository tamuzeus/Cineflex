import { Link } from 'react-router-dom'
import "./selectionmovie.css"
import axios from "axios"
import { useEffect, useState } from 'react'

function Images({ src,id }) {

    return (
        <Link className="filmearea" to={`/hour/${id}`} >
            <img src={src} className="poster"></img>
        </Link>
    )
}

export default function Selectionmovie() {

    const [img, setImg] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
        promise.catch(() => console.log('error'))
        promise.then((value) => {
            setImg(value.data)
        })
    }, [])

    return (
        <article>
            <section className="section">
                <h1 className="selection">Selecione o filme</h1>
            </section>

            <section>
                <div className="filmslist" >
                    {img.map((value) => (<Images src={value.posterURL} key={value.id} id={value.id}/>))}
                </div>
            </section>
        </article>
    )
}