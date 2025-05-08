import "./errorPage.css"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <section className='error-page page'>
        <p className='error-page__text'>Sidan du försöker nå går inte att hitta.</p>
        <Link to="/" >
            <Button text='Tillbaka till startsidan' />
        </Link>
    </section>
  )
}

export default ErrorPage