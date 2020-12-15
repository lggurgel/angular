import { Component } from '@angular/core';
import { CoursesService } from '../course.services';

@Component({
    selector: 'courses', // <courses>
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent {

    course = {
        title: "The complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2020, 11, 11)
    }

    name;
    title = "List of courses";
    courses;

    constructor (service: CoursesService){
        this.courses = service.getCourses()
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Clicked", $event);
    }

    onDivClicked($event) {
        console.log("Div Clicked", $event);
    }

    onKeyUp(email) {
        alert("Submitted: " + email);
    }

    twoWayBiding() {
        alert("Name: " + this.name)
    }
}