import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {imageUrl, title, description, newsUrl} = this.props;
        return (
            <div>
                 {/* style = {{maxHeight: "400px" , overflow: "hidden"}} */}
                <div className="card my-3">
                    <img src= {imageUrl ? imageUrl : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title"><b>{title}</b></h6>
                        <p className="card-text" style = {{fontSize: '12px'}}>{description}</p>
                        <a rel = "noreferrer" href={newsUrl} target = "_blank" className="btn btn-danger">continue reading</a>
                    </div>
                </div>
            </div>
        )
    }
}