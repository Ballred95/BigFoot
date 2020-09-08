import React from 'react' 
import Chip from '@material-ui/core/Chip';



export default function Filters(props) {

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

   return (
   <div className=''>
       <Chip label={props.state} onClick={handleClick} style={{width: '100px', margin: '1rem'}} />
       
   </div>
   )
}



