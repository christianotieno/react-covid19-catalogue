import oceania from '../../../../helpers/containers/continents/oceania';

const oceaniaContinent = {
  AS: 'American Samoa',
  AU: 'Australia',
  CK: 'Cook Islands',
  TL: 'East Timor',
  FJ: 'Fiji',
  PF: 'French Polynesia',
  GU: 'Guam',
  KI: 'Kiribati',
  MH: 'Marshall Islands',
  FM: 'Micronesia',
  NR: 'Nauru',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  PW: 'Palau',
  PG: 'Papua New Guinea',
  PN: 'Pitcairn Islands',
  WS: 'Samoa',
  SB: 'Solomon Islands',
  TK: 'Tokelau',
  TV: 'Tuvalu',
  VU: 'Vanuatu',
};

it('should be an object)', () => {
  expect(oceaniaContinent).toMatchObject(oceania);
});
