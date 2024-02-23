export default function MainMovie({ spotlight }) {
  return (
    spotlight && (
      <div className="centerMovie">
        <div className="words">
          <div className="maintitle">
            <h1 className="spotLightTitle">{spotlight.title}</h1>
            <p className="details">{spotlight.details}</p>
          </div>
          <p className="description">{spotlight.sumry}</p>
        </div>
        <img className="spotlightPoster" src={spotlight.poster} alt="" />
      </div>
    )
  );
}
