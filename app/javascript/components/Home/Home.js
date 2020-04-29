import React, { Component } from 'react';

class Home extends Component {
  constructor(){
    super()

    this.state = {
      course_modules: [
        { id: 1, title: "ABCD", description: "Lorem Ipsum", active: false },
        { id: 1, title: "XYZ", description: "Lorem Ipsum", active: false },
        { id: 1, title: "MNOP", description: "Lorem Ipsum", active: false },
        { id: 1, title: "QRST", description: "Lorem Ipsum", active: false }
      ]
    }
  }

  render() {
    return (
      <div>This is home component.</div>
    )
  }
}

export default Home;
