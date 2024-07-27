import React from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../collectionItem/CollectionItem'

const PreviewCollection = ({title, items}) => {
    console.log("ff" , title)
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.filter((item , index) => index < 4).map(({id , ...itemProps}) => (
            <CollectionItem key = {id} {...itemProps}/>
        ))}
     {/* {items.map(item => (
        <p>{item.name}</p>
     ))} */}
      </div>
    </div>
  )   
}

export default PreviewCollection
