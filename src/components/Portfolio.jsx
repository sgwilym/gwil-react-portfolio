import React from 'react';
import Project from './Project';

export default class Portfolio extends React.Component {

  render() {

    let work = this.props.portfolio.map(function (work, i) {
      return(
        <Project
        key={i}
        title={work.title}
        link={work.link}
        description={work.description}
        images={work.images}
        color={work.color}
        backgroundColor={work.bgColor}/>
      );
    });

    return(
      <ul className="portfolio">
        {work}
      </ul>
    );
  }

}
