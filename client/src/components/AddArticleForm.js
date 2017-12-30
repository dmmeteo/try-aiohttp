import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';

class AddArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agreeNotChecked: true,
            titleIsEmpty: true,
            textIsEmpty: true
        };
        this.btnClickHandler = this.btnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e){
        this.props.onSubmitHandler({
            title: e.target.title.value,
            text: e.target.text.value
        });
        e.preventDefault();
    }

    btnClickHandler(e) {
    }

    onFieldChange(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({['' + fieldName]: false});
        } else {
            this.setState({['' + fieldName]: true});
        }
    }

    onCheckRuleClick() {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    }

    render() {
        let agreeNotChecked = this.state.agreeNotChecked,
            titleIsEmpty = this.state.titleIsEmpty,
            textIsEmpty = this.state.textIsEmpty;

            console.log(agreeNotChecked, titleIsEmpty, textIsEmpty);

        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text"
                           name="title"
                           placeholder="article title"
                           onChange={this.onFieldChange.bind(this, 'titleIsEmpty')}/>
                </FormGroup>
                <FormGroup>
                    <Label for="text">Text of article</Label>
                    <Input type="textarea"
                           name="text"
                           onChange={this.onFieldChange.bind(this, 'textIsEmpty')}/>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"
                               defaultChecked={false}
                               onChange={this.onCheckRuleClick}/>{' '}
                        I agree with site rules
                    </Label>{' '}
                    <Button
                        onClick={this.btnClickHandler}
                        disabled={this.state.agreeNotChecked}
                        color={this.state.agreeNotChecked ? "secondary":"primary"}
                        size="lg"
                    >
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onSubmitHandler: (data) => {
            dispatch({
                type: 'GET_ARTICLE_REQUEST',
                payload: data
            })
        }
    })
)(AddArticleForm);
