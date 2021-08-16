// export interface ExperiencesProps {
//   beginner: {
//     item: string;
//   }[];
//   intermediate: {
//     item: string;
//   }[];
//   advanced: {
//     item: string;
//   }[];
//   futureStudies: {
//     item: string;
//   }[];
// }

export interface ExperiencesProps {
  level: {
    type: string;
    featured?: boolean;
    list?: {
      item: string;
    }[];
  }[];
}
