/* eslint-disable react/prop-types */
const EpisodeItem = ({ episode }) => {
  return (
    <div key={episode.id}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{episode.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{episode.episode}</h6>
          <p className="card-text">{episode.air_date}</p>
          <a href={`/episode/${episode.id}`} className="card-link">
            Character number: {episode.characters.length}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
