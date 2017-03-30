"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var CourseApi = require('../../api/courseApi');
var CourseList = require('./courseList');

var CoursePage = React.createClass({
    getInitialState: function () {
        return {
            courses: CourseApi.getAllCourses()
        };
    },
    // componentWillMount: function() {
    //     CourseStore.addChangeListener(this._onChange);
    // },
    // // Clean up when this component is unmounted
    // componentWillUnmount: function() {
    //     CourseStore.removeChangeListener(this._onChange);
    // },
    // _onChange: function() {
    //     debugger;
    //     this.setState({Courses: CourseStore.getAllAuthors()});
    // },

    render: function () {
        return (
            <div>
                <h1>Courses</h1>
                <Link to="addCourse" className="btn btn-default">Add Course</Link>
                <CourseList courses={this.state.courses} />
            </div>
        );
    }
});

module.exports = CoursePage;