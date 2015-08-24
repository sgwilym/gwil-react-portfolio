import React from 'react/addons';
import styles from './Project.scss';

export default class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      carouselInterval: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = React.addons.update(this.state, {
      currentImage: {$apply: (i) => {
        return i < this.props.images.length - 1 ? i + 1 : 0;
      }}
    });
    this.setState(newState);
  }

  render() {

    const { title, description, link, images, color, backgroundColor } = this.props;

    const imageNodes = images.map((image, i) => {
      let className = (i == this.state.currentImage ? styles.visibleSlide : styles.invisibleSlide );
      let src = require(`../../public/images/${image}`);
      return(
        <li className={className} key={i}><img src={src} /></li>
      );
    });

    const style = {
      color: this.props.color,
      backgroundColor: this.props.backgroundColor
    };

    return(
      <article className={styles.root}>
        <ul
          className={styles.carousel}
          onClick={this.handleClick}>
          {imageNodes}
        </ul>
        <div style={style} className={styles.projectDescription}>
          <h2 className={styles.projectHeader}>{title}</h2>
          <h3 className={styles.projectLink}>
            <a style={style} href={link}>{link}</a>
          </h3>
          <p className={styles.description}>{description}</p>
        </div>
      </article>
    );

  }

}
