import { Link } from "react-router-dom";

function Instructions() {
  return (
    <>
      <h1>Instructions</h1>
      <div className="card">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          perferendis voluptatem praesentium, alias, consequuntur explicabo
          deleniti quasi tenetur accusantium, aperiam doloremque. Similique
          delectus esse quisquam autem praesentium itaque, omnis quas?"
        </p>
      </div>
      <Link to="/" className="btn btn-ui">
        Back to Main Page
      </Link>
    </>
  );
}

export default Instructions;
