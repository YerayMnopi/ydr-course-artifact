import { SlugeableDTO } from 'ydr-nest-common';

export interface CourseCreateDTO extends SlugeableDTO {

    price: number;

    url: string;

    teachers: string[];

    categories: string[];

    platform: string;

    institution: string;
}