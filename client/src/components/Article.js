import React from 'react';
import PropTypes from 'prop-types'; //Migrating from React.PropTypes after(v15.5)
import { Button } from 'reactstrap';

export default class Article extends React.Component {
    constructor(props){
       super(props);
       this.state = {visible: false};
    }

    static propTypes = {
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    };

    readmoreClick(e){
        e.preventDefault();
        this.setState({visible: true}, function() {
            console.log('State is changed!');
        });
    }

    render() {
        let title = this.props.data.title,
            description = this.props.data.description,
            text = decodeURI(this.props.data.text),
            visible = this.state.visible;

        return (
            <div>
                <h2>
                    {title}
                </h2>
                <p>{description}</p>
                <Button
                    color="info"
                    size="sm"
                    onClick={this.readmoreClick.bind(this)}
                    style={{'display': (visible ? 'none':'block')}}
                >
                    Show text
                </Button>
                <p className='markdown-body' style={{'display': (visible ? 'block':'none')}}>{text}</p>
            </div>
        )
    }
}
