import "./selectionmovie.css"
import axios from "axios"
import { useEffect, useState } from 'react'

function Images({ src }) {

    return (
        <div className="filmearea">
            <img src={src} className="poster"></img>
        </div>
    )
}

export default function Selectionmovie() {

    const [img, setImg] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
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

            <section className="filmslist">

                {img.map((value, index) => (<Images src={value.posterURL} key={value.id} />))}

            </section>
        </article>
    )
}