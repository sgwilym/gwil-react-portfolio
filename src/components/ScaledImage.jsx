import React from 'react/addons';

export default class ScaledImage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      loaded: false
    };

    this.handleLoaded = this.handleLoaded.bind(this);
  }

  handleLoaded(e) {
    const { scale } = this.props;
    var img = new Image();
    img.src = e.target.src;

    img.onload = () => {
      const nextState = {
        width: img.width * scale,
        height: img.height * scale,
        loaded: true
      };

      this.setState(nextState);
    };
  }

  render() {

    const { width, height } = this.state;
    const { src } = this.props;

    return (
      <img width={width} height={height} src={src} onLoad={this.handleLoaded}/>
    );
  }

}
