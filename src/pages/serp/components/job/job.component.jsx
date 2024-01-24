import React from 'react';
import './job.style.scss';

import mapPin from '../../../../assets/svgs/map_pin.svg';
import arrowRight from '../../../../assets/svgs/arrow_right.svg';

export const Job = ({ jobTitle, company, city, county, link }) => {
  const [jobCity] = React.useState(city);
  const [jobCounty] = React.useState(county);

  return (
    <section className="job">
      <div className="details">
        <h2
          className="position"
          dangerouslySetInnerHTML={{ __html: jobTitle }}
        ></h2>
        <p className="company">{company}</p>
        <p className="location">
          <img src={mapPin} alt="map pin" className="icon" />
          {jobCity !== 'nespecificat'
            ? jobCity.length > 1
              ? jobCity.map((job, index) => {
                  if (index === jobCity.length - 1) {
                    return job;
                  } else return job + ', ';
                })
              : jobCity[0]
            : ''}
          {jobCounty !== 'nespecificat' && jobCity.length === 1
            ? `, ${jobCounty}`
            : ''}
        </p>
      </div>
      <div className="button-position">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn-yellow btn"
        >
          Vezi postul{' '}
          <img src={arrowRight} alt="arrow right" className="icon" />
        </a>
      </div>
    </section>
  );
};
