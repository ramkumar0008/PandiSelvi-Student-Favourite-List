import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const students = [
  {
    id: 1,
    name: "PandiSelvi",
    RollNumber: "101",
  },
  {
    id: 2,
    name: "Arun Kumar",
    RollNumber: "102",
  },
  {
    id: 3,
    name: "Priya",
    RollNumber: "103",
  },
  {
    id: 4,
    name: "Divya",
    RollNumber: "104",
  },
  {
    id: 5,
    name: "Karthik",
    RollNumber: "105",
  },
  {
    id:6,
    name:"Rithik",
    RollNumber:"106"
  }
];

const StudentList = () => {
  const { favourites, addToFavourite } =
    useContext(StudentContext);

  return (
    <div className="container">
      <h1>Student List</h1>

      <div className="student-grid">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>
              <h2>{student.name}</h2>

              <p>
                Roll Number: {student.rollNumber}
              </p>

              <button
                onClick={() => addToFavourite(student)}
                disabled={isFavourite}
              >
                {isFavourite
                  ? "Added to Favourite"
                  : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;