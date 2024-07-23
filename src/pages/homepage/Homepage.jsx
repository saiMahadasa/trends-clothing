import React from 'react'
import './homepage.styles.scss';
import DirectoryComponent from '../../components/directory/DirectoryComponent';

const Homepage = ({history}) => {
  console.log(history)
  return (
    <div className='homepage'>
       <DirectoryComponent/>
    </div>
  )
}

export default Homepage

