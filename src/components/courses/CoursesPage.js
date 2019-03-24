
import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends React.Component{
state = {
            course: {
                title:''
            }
        }

onChangeHandler = (event) =>{
    const course = {...this.state.course, title: event.target.value};
  
    this.setState({course});
    
}

handleSubmit = (event) => {
      event.preventDefault();
    this.props.createCourse(this.state.course)
  
}

    render(){
        return (<form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.onChangeHandler} value={this.state.course.title}/>
        <input type="submit" value="Save"/>
       
{this.props.courses.map(course => (<div key={course.title}>{course.title}</div>))}
 </form>
        )}
    }

function mapStateToProps(state){
    return {

        courses: state.courses
    }
}
function mapDispatchToProps(dispatch){
    return{
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)