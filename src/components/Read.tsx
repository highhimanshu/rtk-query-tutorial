import React from "react";
import {
  useDeleteStudentMutation,
  useGetStudentsQuery,
} from "../features/studentSlice";
import { NavLink } from "react-router-dom";

const Read = () => {
  const {
    data: students,
    isSuccess,
    isError,
    error,
    isLoading,
  } = useGetStudentsQuery(3);

  const [deleteStudent] = useDeleteStudentMutation();

  return (
    <div className="container mx-auto">
      <h2>Read Operation</h2>
      <div className="row">
        {isLoading && <span>Loading..</span>}
        {isError && <span>Something went wrong</span>}
        {isSuccess &&
          students?.map((student) => (
            <div key={student?.id} className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{student?.studentName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {student?.studentEmail}
                  </h6>
                  <button
                    className="card-link"
                    onClick={() => deleteStudent(student?.id)}
                  >
                    Delete
                  </button>
                  <button className="card-link">
                    <NavLink to={`edit/${student?.id}`}>Edit</NavLink>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
