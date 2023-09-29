
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from "./constant";
import PathwayCourse from "../Pages/pathways";
import PathwayExercise from "../Pages/PathwayExercise"

const Routing = () => {
    return (
        
            <Routes>
                <Route path={PATHS.PATHWAY_COURSE} element={<PathwayCourse/> } />
                <Route path={PATHS.PATHWAY_COURSE_CONTENT} element={<PathwayExercise/> } />
            </Routes>
        
    );
}
export default Routing;