import React from 'react';
import CurriculumVitae from './CurriculumVitae';
import Portfolio from './Portfolio';
import styles from './Page.scss';

export default class Page extends React.Component {

  render() {

    const { portfolio } = this.props;

    return(
      <div className={styles.root}>
        <CurriculumVitae
          {...this.props} />
        <Portfolio portfolio={portfolio} />
      </div>
    );
  }

}
