import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";
export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { search: searchTerm }],

    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
    // queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
    enabled: searchTerm !== undefined, // this will prevent the query from running on page load and if empty after searching I will get all values
    // enabled: searchTerm!=="" // this will prevent the query from running on page load but if empty  after searching I won't get all values
    // enabled: false, // this will prevent the query from running on page load
  });
  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events</p>;
  // if (isPending) {
  //   content = <LoadingIndicator />;
  // }
  // difference between isPending and isLoading is that isPending is a boolean value that is true when the query is in a loading state, while isLoading is a boolean value that is true when the query is in a loading state or when the query is fetching data.
  if (isLoading) {
    content = <LoadingIndicator />;
  }
  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
