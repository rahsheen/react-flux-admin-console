'use strict';

var React = require('react');
var CourseForm = require('./courseForm');

var ManageCoursePage = React.createClass({

    getInitialState: function () {
        return {
            course: { title: '', author: ''},
            errors: {},
            dirty: false
        };
    },
    setCourseState: function() {
        
    },
    saveCourse: function() {

    },   

    render: function () {
        return (
            <CourseForm
                course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}
            />
        );
    }

});

module.exports = ManageCoursePage;