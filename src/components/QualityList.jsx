import React from 'react';
import ScaledImage from './ScaledImage';
import styles from './QualityList.scss';

export default class QualityList extends React.Component {

  render() {

    const { icon, title, skills } = this.props;

    const skillNodes = skills.map((skillSet) => {
      let line = skillSet.map((skill) => {
        return(<li className={styles.skill} key={skill}><span>{skill}</span></li>);
      });
      return(
        <li className={styles.skillSet} key={skillSet[0]}>
          <ul className={styles.skills}>
            {line}
          </ul>
        </li>
      );
    });

    return(
      <ul className={styles.root}>
        <h2 className={styles.heading}>
          <ScaledImage
            scale={0.25}
            src={require(`../../public/images/${icon}.png`)}
          />{title}</h2>
        {skillNodes}
      </ul>
    );
  }

}
