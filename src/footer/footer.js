import "./footer.css"

export default function Footer({url, title, hour = '', weekday = ''}) {

    return (
        <footer className="footer">
            <div className="divfooterarea">
                <img src={url} alt= "imgfooter" className="footerimg" />
            </div>
            <div className="footermpvieinfo">
                <h1 className="footermoviename">{title}</h1>
                {hour ? <h1 className="footermoviename date"> {hour} - {weekday} </h1> : <></>}
            </div>
        </footer>
    )
}