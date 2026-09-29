
function TeamCard({ team }) {
  const { imageUrl, imageAlt, name, flag } = team;
  
  return (
    <article className="card card-team h-100">
      <div
        className="card-team__image-wrapper bg-image hover-overlay"
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          loading="lazy"
          className="card-team__image"
        />
        <div className="mask card-team__mask"></div>
      </div>

      <div className="card-header card-team__header">
        <i
          className={`flag flag-${flag}`}
          aria-hidden="true"
        ></i>

        <h3 className="card-team__title">
          {name}
        </h3>
      </div>
    </article>
  );
}

export default TeamCard;
