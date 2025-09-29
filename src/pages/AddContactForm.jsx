export default function AddContactForm() {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="inputName" />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input type="text" className="form-control" id="inputPhone" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>

        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
