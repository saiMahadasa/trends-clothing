import React, { Component } from 'react'
import SHOP_DATA from './ShopData';
import PreviewCollection from '../../../components/PreviewCollection/PreviewCollection';

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections : SHOP_DATA
        }  
    }
  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
       {collections.map(({index, ...OtherCollectionProps}) => (
        // console.log(...otherPreviewProps);
        <PreviewCollection key = {index} {...OtherCollectionProps}/>
       ))}
       
      </div>
    )
  }
}
