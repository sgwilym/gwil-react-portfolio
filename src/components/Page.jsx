import React from 'react';
import CurriculumVitae from './CurriculumVitae';
import Portfolio from './Portfolio';

export default class Page extends React.Component {

  render() {
    return(
      <body>
        <CurriculumVitae
          icon={this.props.data.icon}
          name={this.props.data.name} description={this.props.data.description}
          workingOn={this.props.data.workingOn} qualities={this.props.data.qualities}
          clients={this.props.data.clients}
          links={this.props.data.links} />
        <Portfolio portfolio={this.props.data.portfolio} />
      </body>
    );
  }

}
