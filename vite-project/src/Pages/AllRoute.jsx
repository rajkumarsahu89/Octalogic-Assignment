import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Course } from "./Course";
import { Home } from "./Home";
import { AddCourse } from "./AddCourse";
import { useSelector } from "react-redux";

export const AllRoute = () => {
  const isAuth = useSelector((state) => state.authreducer.isAuth);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        {isAuth && (
          <Route>
            <Route path='/course' element={<Course />} />
            <Route path='/home' element={<Home />} />
            <Route path='/addcourse' element={<AddCourse />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};
