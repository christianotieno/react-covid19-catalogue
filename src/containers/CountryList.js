import React from 'react';

function CountryList() {
  return (
    <div>
      <div className="africaContainer" id="africaContainer">
        <h2>Africa&apos;s container</h2>
      </div>
      <div className="allStats" id="allStats">
        <h2>All Stats</h2>
      </div>
      <div className="stats" id="stats">
        <h2>Stats</h2>
      </div>
      <div className="continentlistContainer">
        <div className="asiaGrid" id="asiaGrid">
          <h2>Asia&apos;s Grid</h2>
        </div>
        <div className="northAmericaGrid" id="northAmericaGrid">
          <h2>North America&apos;s Grid</h2>
        </div>
        <div className="southAmericaGrid" id="southAmericaGrid">
          <h2>South America&apos;s Grid</h2>
        </div>
        <div className="antarcticaGrid" id="antarcticaGrid">
          <h2>Antarctica&apos;s Grid</h2>
        </div>
        <div className="europeGrid" id="europeGrid">
          <h2>Europe&apos;s Grid</h2>
        </div>
        <div className="australiaGrid" id="australiaGrid">
          <h2>Australia&apos;s Grid</h2>
        </div>
      </div>
    </div>
  );
}

export default CountryList;
