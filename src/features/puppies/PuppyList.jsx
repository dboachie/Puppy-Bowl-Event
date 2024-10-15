import { useGetPuppiesQuery } from "../../store/api.js";
/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */

export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const { data = {}, error, isLoading } = useGetPuppiesQuery();
  if (isLoading) {
    return <div> Loading...</div>;
  }

  // Display an error message if there is an error
  if (error) {
    return <div> Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {data.data.players.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <h3>{p.breed}</h3>
            <h3>{p.status}</h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}>
              See details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
