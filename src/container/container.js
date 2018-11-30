import React from 'react';
import Component from '../component/component.js';
import { connect } from 'react-redux';
import {actions} from '../module/articles.js';

class Container extends React.Component{

    render(){
        return(
            <Component handleClick={this.props.getArticles} articles={this.props.articles}></Component>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}), actions)(Container);