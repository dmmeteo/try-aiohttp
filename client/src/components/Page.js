import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.onCategoryBtnClick = this.onCategoryBtnClick.bind(this);
    }
    onCategoryBtnClick(e){
        this.props.setCategory(e.target.textContent);
    }

    render() {
        const {category, articles} = this.props;
        let newsTemplate;

        if (articles.length > 0) {
            newsTemplate = articles.map((item, index) => (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            )
        }
        return (
            <div>
                <p>
                    <Button color="secondary" onClick={this.onCategoryBtnClick}>boo</Button>{' '}
                    <Button color="warning" onClick={this.onCategoryBtnClick}>js</Button>{' '}
                    <Button color="info" onClick={this.onCategoryBtnClick}>py</Button>
                </p>

                <h3>Is: {category}</h3>
                <hr/>

                {newsTemplate}

                <strong style={{'display': (articles.length > 0 ? 'block' : 'none')}}>
                    Count of news: {articles.length}
                </strong>
            </div>
        )

    }
}

Page.PropTypes = {
    category: PropTypes.string.isRequired,
    articles: PropTypes.array.isRequired,
    setCategory: PropTypes.func.isRequired
};