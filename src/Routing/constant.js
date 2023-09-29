export const PATHS={
    
    PATHWAY_COURSE: "/",
    PATHWAY_COURSE_CONTENT: "/course-content/:pathwayId/:courseId/:exerciseId",
}
export const interpolatePath = (path, paramValues) =>
  path.replace(/:(\w*)/g, (_, param) => paramValues[param]);
  
