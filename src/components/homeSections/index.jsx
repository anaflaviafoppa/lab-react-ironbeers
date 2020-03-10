import React from 'react'

const homeSections = (props) => {
  const { title,img } = props;
  return (
    <div className="row">
      <div className="col">
        <img src={img} ></img>
        <h1>{ title }</h1>
        <p>Aliquyam vero sit ea justo erat. 
        Dolor vero dolores labore invidunt sed no 
        voluptua, eos et tempor sit sed et dolore. 
        Amet justo sed et et consetetur justo. 
        Et lorem sit sanctus sea clita tempor aliquyam 
        ipsum eirmod. Sed magna dolore eos voluptua invidunt 
        labore sed ipsum, est et stet.</p>
      </div>
    </div>
  )
}


export default homeSections;
