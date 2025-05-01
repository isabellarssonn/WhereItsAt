import EventList from '../../components/EventList/EventList'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useFetch } from '../../hooks/useFetch'
import "./eventPage.css"

function EventPage() {
  const {data : events, isLoading, isError} = useFetch('https://santosnr6.github.io/Data/events.json');

  if(isLoading) return <section className='page'><p>Loading...</p></section>;
  if(isError) return <section className='page'><p>Error</p></section>;

  return (
    <section className='event-page page'>
      <Header title="Events" />
      <SearchBar />
      { events && <EventList events={ events }/> }
    </section>
  )
}

export default EventPage