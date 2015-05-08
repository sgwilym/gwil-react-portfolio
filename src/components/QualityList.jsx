import React from 'react';
import ScaledImage from './ScaledImage';

export default class QualityList extends React.Component {

  render() {

    let skills = this.props.skills.map((skillSet) => {
      let line = skillSet.map((skill) => {
        return(<li key={skill}><span>{skill}</span></li>)
      });
      return(<li key={skillSet[0]}><ul className="skill-set">{line}</ul></li>);
    });

    return(
      <ul className="quality-list">
        <h2><ScaledImage scale={0.25} src={`../../public/images/${this.props.icon}.png`}/> {this.props.title}</h2>
        {skills}
      </ul>
    );
  }

}
