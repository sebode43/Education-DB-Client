import { Major } from '../major/major.class';

export class Student{
    id: number = 0;
    name: string = '';
    sat: number = 400;
    gpa: number = 3.0;
    majorId?: number = null;
    major: Major = null;

    constructor() {}
}