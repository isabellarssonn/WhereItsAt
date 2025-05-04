import "./eventPage.css"
import EventList from '../../components/EventList/EventList'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import Button from '../../components/Button/Button'
import { useFetch } from '../../hooks/useFetch'
import { Link } from "react-router-dom"

function EventPage() {
  const {data : events, isLoading, isError} = useFetch('https://santosnr6.github.io/Data/events.json');

  if(isLoading) return <section className='page'><p>Loading...</p></section>;
  if(isError) return <section className='page'><p>Error</p></section>;

  return (
    <section className='event-page page'>
      <Header title="Events" />
      <SearchBar />
      { events && <EventList events={ events }/> }
      <Link to={"/cart"}>
        <Button text="Gå till varukorgen"/>
      </Link>
    </section>
  )
}

export default EventPage