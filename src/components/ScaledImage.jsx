import React from 'react/addons';

export default class ScaledImage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      loaded: false
    }

    this.handleLoaded = this.handleLoaded.bind(this);
  }

  handleLoaded(e) {
    var img = new Image();
    img.src = e.target.src;
    let width = img.width * this.props.scale;
    let height = img.height * this.props.scale;

    let nextState = {
      width,
      height,
      loaded: true
    };

    this.setState(nextState);
  }

  render() {
      return (
        <img width={this.state.width} height={this.state.height} src={this.props.src} onLoad={this.handleLoaded}/>
      );
  }

}
