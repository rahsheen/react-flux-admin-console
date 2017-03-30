"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');

var CourseList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },

    // deleteCourse: function(id, event) {
    //     event.preventDefault();
    //     debugger;
    //     CourseActions.deleteCourse(id);
    //     toastr.success('Course Deleted');
    // },

    render: function () {
        var createCourseRow = function (course) {
            return (
                <tr key={course.title}>
                    <td><a href="#">Delete</a></td>
                    <td><a href="#">Watch</a></td>
                    <td>{course.title}</td>
                    <td>{course.author}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CourseList;