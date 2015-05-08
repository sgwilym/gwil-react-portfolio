import React from 'react/addons';

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
    let newState = React.addons.update(this.state, {
      currentImage: {$apply: (i) => {
        return i < this.props.images.length - 1 ? i + 1 : 0
      }}
    });
    this.setState(newState);
  }

  render() {

    let images = this.props.images.map((image, i) => {
      let className = (i == this.state.currentImage ? 'visible' : 'invisible');
      let src = require(`../../public/images/${image}`);
      return(
        <li className={className} key={i}><img src={src} /></li>
      );
    });

    let style = {
      color: this.props.color,
      backgroundColor: this.props.backgroundColor
    };

    return(
      <article>
        <ul className="project-carousel" onClick={this.handleClick}>
          {images}
        </ul>
        description = <div style={style} className="project-description">
          <h2>{this.props.title}</h2>
          <h3>
            <a style={style} href={this.props.link}>{this.props.link}</a>
          </h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    )

  }

}
