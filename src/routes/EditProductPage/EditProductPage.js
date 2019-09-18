import React from 'react';
import EditProductForm from '../../Components/EditProductForm/EditProductForm'

export default class EditProductPage extends React.Component{
    render(){
        return(
            <div className="prodList_container">
            <EditProductForm/>
            </div>
        )
    }
}