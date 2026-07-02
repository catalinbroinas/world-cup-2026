import { useEffect } from 'react';
import { Ripple, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function TeamCard({ team }) {
  const { imageUrl, imageAlt, name, flag } = team;
  
  useEffect(() => {
    initMDB({ Ripple });
  }, []);

  return (
    <div className="card card-team h-100">
      <div
        className="card-team__image-wrapper bg-image hover-overlay"
        data-mdb-ripple-init
        data-mdb-ripple-color="light"
      >
        <img src={imageUrl} alt={imageAlt} className="card-team__image" />
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
    </div>
  );
}

export default TeamCard;
