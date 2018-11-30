import React from 'react';

class Component extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.handleClick}>Cargar botones</button>
                <ul>
                    {this.props.articles.map(article => 
                    <li>
                        {article.title}
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Component;