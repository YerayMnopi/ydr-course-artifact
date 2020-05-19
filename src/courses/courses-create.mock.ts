import { CourseCreateDTO } from "./courses-create.dto";

export const courseCreateDTOFactory = (): CourseCreateDTO => ({
    name: 'test',
    slug: 'test',
    image: 'https://www.google.com',
    price: 0,
    teachers: ['Test teacher'],
    platform: 'coursera',
    institution: 'IBM',
    categories: ['machine-learning'],
    url: 'https://google.com',
    createdAt: new Date(),
    updatedAt: new Date()
  });
