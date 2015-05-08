import React from 'react';
import QualityList from './QualityList';
import ScaledImage from './ScaledImage';

export default class CurriculumVitae extends React.Component {

  render() {

    let qualityNodes = this.props.qualities.map((quality) => {
      return(
        <QualityList key={quality.title} title={quality.title} icon={quality.icon} skills={quality.skills} />
      );
    });

    let clientNodes = this.props.clients.map((client) => {
      return(
        <li key={client.name}><a href={client.url}>{client.name}</a></li>
      );
    });

    let links = this.props.links.map((link) => {
      return(
        <li key={link.name}>
          <a href={link.url}><ScaledImage scale={0.25} src={`../../public/images/${link.name}.png`}/></a>
        </li>
      );
    });

    return(
      <section className="curriculum-vitae">

        <header>
          <ScaledImage src={`../../public/images/${this.props.icon}`} scale={0.25}/>
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
          <p className="working-on">{this.props.workingOn}</p>
        </header>

        <ul>
          {qualityNodes}
        </ul>

        <h2>
          <ScaledImage
          scale={0.25} src="../../public/images/clients.png" />
          Some clients
        </h2>

        <ul className="clients">
          {clientNodes}
        </ul>

        <ul className="links">
          {links}
        </ul>

        <p className="note">This portfolio is a React app! <a href="https://github.com/sgwilym/gwil-react-portfolio">Check it out on GitHub.</a></p>

      </section>
    )
  }

}
