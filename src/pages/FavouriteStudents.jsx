import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const FavouriteStudents = () => {
  const {
    favourites,
    removeFromFavourite,
  } = useContext(StudentContext);

  return (
    <div className="container">
      <h1>Favourite Students</h1>

      {favourites.length === 0 ? (
        <p className="empty-message">
          No favourite students added yet
        </p>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div
              className="student-card"
              key={student.id}
            >
              <h2>{student.name}</h2>

              <p>
                Roll Number: {student.rollNumber}
              </p>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromFavourite(student.id)
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouriteStudents;