import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

class News extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };

    render() {
        let data = this.props.data;
        let newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map((item, index) =>
                (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            )
        } else {
            newsTemplate = <p>No news...</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>Count of
                    news: {data.length}</strong>
            </div>
        )
    }
}

export default News
