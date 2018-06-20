import React, { Component } from 'react';

class Upload extends Component {
  constructor(props) {
    super(props);

    //this.handleTagChange = this.handleTagChange.bind(this);
    this.uploadWidget = this.uploadWidget.bind(this);
  }

  /*handleTagChange(event) {
    console.log('tag before: ', this.state.tag);
    // updating [tags] in state to send with upload request
    this.setState({ tag: event.target.value });
    /*this.setState(state => {
      state.tag = event.target.value;
      return state;
    });*//*
    console.log('tag after: ', this.state.tag);
  };*/

  goTo(route) {
    alert('Routing');
    this.props.history.push(`/${route}`)
  }

  uploadWidget = () => {
    window.cloudinary.openUploadWidget( {
      cloud_name: 'flycrow',
      upload_preset: 'ubx3ytwg',
      tags: [ 'TBM' ], //this.props.tag, //.push('TBM'),
      sources: ['local', 'url']
    },
      function(result) {
        if (result) {
          alert('Routing');
          console.log("This is the result of the last upload", result);
          alert('Routing');
          this.props.history.push(`/success`);
        }
      },
      catch(error) {
        console.log('Error: ', error);
      });
  }

  render() {

    return (
      <div>
      {console.log('logging: ', this.props.tag)}

        <div className="col-sm-12">
          <div className="jumbotron text-center">{/*<input placeholder="Content Tag" onChange={this.handleTagChange}></input>*/}
            <button onClick={this.uploadWidget} className="btn btn-lg btn-info">Upload Content</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
