import React, {Component} from 'react' 

export default class API extends Component {
   constructor(props) {
       super(props)

       this.state = {
           data: ''
       }
   }

   componentDidMount() {
    fetch('https://services2.arcgis.com/sJvSsHKKEOKRemAr/arcgis/rest/services/Bigfoot%20Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({data: myJson.features[0].attributes})
      console.log(this.state.data)
      
    });
   }



render() {
       return (
           <div className = ''>
               {this.state.data.STATE_NAME}
           </div>
       )
   }
}