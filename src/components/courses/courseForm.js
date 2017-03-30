"use strict";

var React = require('react');
var Input = require('../common/textInput');

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (

            <form>
                <h1>Manage Course</h1>
                <Input
                    name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title}
                />

                <Input
                    name="author"
                    label="Author"
                    value={this.props.course.author}
                    onChange={this.props.onChange}
                    error={this.props.errors.author}
                />

                <Input
                    name="duration"
                    label="Duration"
                    value={this.props.course.duration}
                    onChange={this.props.onChange}
                    error={this.props.errors.author}
                />

                <input type="submit"
                    value="Save"
                    className="btn btn-default"
                    onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;