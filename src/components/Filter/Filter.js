import React from 'react';
import styles from './Filter.module.css';
const Filter = ({ onChange, value }) => (
  <input
    className={styles.filterInput}
    onChange={onChange}
    value={value}
    placeholder="Filter"
    type="text"
    name="filter"
  ></input>
);

export default Filter;
