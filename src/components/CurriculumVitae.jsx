import React from 'react';
import QualityList from './QualityList';
import ScaledImage from './ScaledImage';
import styles from './CurriculumVitae.scss';

export default class CurriculumVitae extends React.Component {

  render() {

    const { name, description, workingOn, qualities, clients, links, icon } = this.props;

    const qualityNodes = qualities.map((quality) => {
      return(
        <QualityList
          key={quality.title}
          title={quality.title}
          icon={quality.icon}
          skills={quality.skills}
        />
      );
    });

    const clientNodes = clients.map((client) => {
      return(
        <li className={styles.clientItem} key={client.name}><a href={client.url}>{client.name}</a></li>
      );
    });

    const linkNodes = this.props.links.map((link) => {
      return(
        <li className={styles.link} key={link.name}>
          <a href={link.url}><ScaledImage scale={0.25} src={require(`../../public/images/${link.name}.png`)}/></a>
        </li>
      );
    });

    return(
      <section className={styles.root}>

        <header className={styles.header}>
          <ScaledImage src={require(`../../public/images/${icon}`)} scale={0.25}/>
          <h1>{name}</h1>
          <p>{description}</p>
          <p className={styles.workingOn}>{workingOn}</p>
        </header>

        {qualityNodes}

        <h2 className={styles.subHeader}>
          <ScaledImage
          scale={0.25} src={require("../../public/images/clients.png")} />
          Some clients
        </h2>

        <ul className={styles.asideList}>
          {clientNodes}
        </ul>

        <ul className={styles.links}>
          {linkNodes}
        </ul>

        <p className={styles.note}>This is a React app! <a href="https://github.com/sgwilym/gwil-react-portfolio">Check out the source on GitHub.</a></p>

      </section>
    );
  }

}
