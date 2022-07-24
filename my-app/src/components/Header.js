import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title ,onAdd,showAdd}) => {

    // const onClick=() =>{
    //     console.log('Click')
    // }



  return (
    <header className='header'>
    {/* we can implement css in js  using style components like this or we can create a seperate css file */}
    {/* <h1 style={headingStyle}> {title} </h1> */}
    {/* <h1 style={{color: 'black', backgroundColor: 'red'}}> {title} </h1> */}
    <h1> {title} </h1>
    <Button color={showAdd ? 'blue':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps ={
    title: 'Task Tracker', 
}

Header.propTypes= {
    title: PropTypes.string.isRequired, 
}

// const headingStyle={
//     color: 'blue', 
//     backgroundColor: 'black'
// }

export default Header