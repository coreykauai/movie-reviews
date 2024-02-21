export default function MainMovie({ spotlight }) {
  return (
    spotlight && (
      <div className="centerMovie">
        <div className="movieandtitle">
          <h1 className="spotLightTitle">{spotlight.title}</h1>
          <img className="spotlightPoster" src={spotlight.poster} alt="" />
        </div>
        <p className="description">{spotlight.sumry}</p>
      </div>
    )
  );
}
