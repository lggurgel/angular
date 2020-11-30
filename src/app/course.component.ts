import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        
        <h2>{{ "Title: " + getTitle() }}</h2 >
        
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>

        `
})
export class CoursesComponent {

    title = "List of courses";
    courses = ["course 1", "course 2", "course 3"]

    getTitle() {
        return this.title;
    }
}