import React from 'react';
import moment from 'moment';

const TurnRecord = props => (
  <div className='turn-record'>
    Clicked {props.number} at {moment(props.timestamp).format('DD MM YYYY HH:mm')}
  </div>
);

export default TurnRecord;