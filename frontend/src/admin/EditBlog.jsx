// File: src/admin/EditBlog.jsx (inferred)
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Blog (ID: {id})</h2>
      <p>Here you'll edit the blog with ID: {id}</p>
    </div>
  );
};

export default EditBlog;