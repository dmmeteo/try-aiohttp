import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';
import Header from '../components/Header';
import AddArticleForm from '../components/AddArticleForm';


//TODO normal menu from redux
let menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    }
];

class App extends React.Component {
    render() {
        const {user, page} = this.props;
        const {setCategory} = this.props.pageActions;

        return (
            <div>
                <Header items={menu} name={user.name}/>
                <Container>
                    <AddArticleForm/>
                    <hr/>
                    <Page articles={page.articles} category={page.category} setCategory={setCategory}/>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
