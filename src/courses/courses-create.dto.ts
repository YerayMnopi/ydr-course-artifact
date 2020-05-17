export interface CourseCreate extends SlugeableDTO {

    price: number;

    url: string;

    teachers: string[];

    categories: string[];

    platform: string;

    institution: string;
}