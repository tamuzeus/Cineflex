import "./selectionhour.css"

export default function Selectionhour() {
    return (
        <article>
            <section className="section">
                <h1 className="selection">Selecione o horário</h1>
            </section>

            <section className="sectionsinfos">

                <div className="infosbody">
                    <p className="infoday">Quinta-feira - 24/06/2021</p>
                    <div className="buttonsbody">
                        <div className="buttonhour">
                            <p className="buttontext">15:00</p>
                        </div>
                        <div className="buttonhour">
                            <p className="buttontext">19:00</p>
                        </div>

                        <div className="buttonhour">
                            <p className="buttontext">21:00</p>
                        </div>

                    </div>
                </div>

                <div className="infosbody">
                    <p className="infoday">Sexta-feira - 25/06/2021</p>
                    <div className="buttonsbody">
                        <div className="buttonhour">
                            <p className="buttontext">15:00</p>
                        </div>
                        <div className="buttonhour">
                            <p className="buttontext">19:00</p>
                        </div>
                    </div>
                </div>


            </section>
        </article>
    )
}