
import "./selectionsucess.css"

export default function Selectionsucess({info}) {

    return (
        <article>
            <section className="section">
                <h1 className="selection sucess"><p>Selecione o filme</p></h1>
            </section>

            <section className="sucesssection">

                <div>
                    <div className="sucessinfo">
                        <div className="principaltext"><p>Filme e sessão</p></div>
                        <div className="infoonetext"><p>Enola Holmes</p></div>
                        <div className="infotwotext"><p>24/06/2021 - 15:00</p></div>
                    </div>

                    <div className="sucessinfo">
                        <div className="principaltext"><p>Ingressos</p></div>
                        <div className="infoonetext"><p>Assento {info.id%50}</p></div>
                    </div>

                    <div className="sucessinfo">
                        <div className="principaltext"><p>Comprador</p></div>
                        <div className="infoonetext"><p>Nome: {info.name}</p></div>
                        <div className="infotwotext"><p>CPF: {info.cpf}</p></div>
                    </div>
                </div>


                <div className="buttonseat end">
                    <p>Obrigado!</p>
                </div>

            </section>
        </article>
    )

}