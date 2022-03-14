import React,{Component} from 'react';
import {connect} from 'react-redux';
import {latestNews,articleNews,galleryNews} from '../actions/actionFile';
import LatestDisplay from '../component/Home/LatestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';
import GalleryDisplay from '../component/Home/GalleryDisplay'

class Home extends Component {
    // call action 
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestNews}/>
                <ArticleDisplay adata={this.props.datalist.articleNews} />
                <GalleryDisplay gdata={this.props.galList.galleryNews}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        datalist:state.article,
        galList:state.gallery
    }
}

export default connect(mapStateToProps)(Home);