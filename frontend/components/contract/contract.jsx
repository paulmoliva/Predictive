import React from 'react';

// Components

class Contract extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <form onSubmit={()=>this.props.createContract($('#proposition').val())}>
          <input type='text' id='proposition'></input>
        </form>
      </div>
    );
  }
}

export default Contract;
