import React from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/index';
import CountryStatModal from '../CountryStat';

function Oceania(props) {
  const { oceania } = props.oceania;

  const country = Object.entries(oceania).map((
    [key, value],
  ) => (

    <button
      key={key}
      type="button"
      className="list-group-item list-group-item-action"
    >
      {value}
      <div
        className="float-right"
      >
        <CountryStatModal />
      </div>
    </button>

  ));

  return (
    <div>
      <div className="list-group">
        {country}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  oceania: state.oceania,
});

const mapDispatchToProps = dispatch => ({
  getCountry: () => dispatch(getCountry()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Oceania);
