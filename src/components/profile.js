/* eslint-disable react/sort-comp */
/* eslint-disable no-alert */
import React from 'react';
import Employee from './singleuser';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      age: '',
      id: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  getProfile = () => {
    const { id } = this.state;
    fetch(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((response) => response.json())
      .then(((res2) => {
        const success = !!res2.name;
        this.setState({ success });
        this.setState(res2);
      }));
  }

  render() {
    const props = {};
    Object.assign(props, this.state, this);
    return (
      <div>
        <form>
          please enter your id to get profile
          <input type="text" name="id" onChange={(e) => this.handleChange(e)} />
        </form>
        <button type="button" onClick={() => this.getProfile()}>Get Profile</button>
        <Employee {...props} />
      </div>
    );
  }
}

export default Profile;
