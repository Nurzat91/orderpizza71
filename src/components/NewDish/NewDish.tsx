
const NewDish = () => {
  return (
    <form>
      <h4>Add new dish</h4>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="form-control"
          autoComplete="on"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          autoComplete="on"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          className="form-control"
          autoComplete="on"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Create
      </button>
    </form>
  );
};

export default NewDish;