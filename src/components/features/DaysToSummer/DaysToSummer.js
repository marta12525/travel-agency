import React from 'react';

import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';


const DaysToSummer = ({ days }) => (
  <div className={styles.title}>
    {days > 0 && (
      <span>{days} days till summer</span>
    )}

    {(days <= 0 && days != 1) && (
      <span>It&apos;s summer!!!</span>
    )}

    {days == 1 && (
      <span>It&apos;s only 1 day till summer!</span>
    )}
  </div>
); 


DaysToSummer.propTypes = {
  days: PropTypes.number,
};

export default DaysToSummer;