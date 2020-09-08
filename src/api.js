import React, {Component} from 'react' 
import Filters from './filters'

export default class API extends Component {
   constructor(props) {
       super(props)

       this.state = {
           loaded: false,
           data: []
       }

       
   }

   componentDidMount() {
    fetch(
      "https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          data: myJson.features,
          loaded: true,
        });
        console.log(this.state.data);
      });
  }

  render() {
    // Data is still loading, display an intermediate message
    if (!this.state.loaded) {
      return <p>Loading...</p>;
    }
    return <div className="container">{this.state.data.map(item=> {
        return <div>
          <Filters state={item.attributes.STATE_NAME} />
        </div>
                
    })}</div>;
  }

}