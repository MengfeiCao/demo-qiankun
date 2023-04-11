import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: 10,
    };
  }
  componentDidMount() {
    this.setState((state, props) => ({
      res: state.res + props.num,
    }))
  }
  render() {
    return <div>{ this.state.res }</div>
  }
}

export default Test1;