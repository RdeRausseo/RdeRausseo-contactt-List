import React from "react";
import PropTypes from "prop-types";
import avatar from "../assets/img/avatar.png";

const UserContactCard = ({ contact }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4">
          <img src={avatar} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-8">
          <div className="card-body">
            <div className="d-flex justify-content-center align-items-start gap-2">
              <h5 className="card-title">{contact.name}</h5>
              <button className="btn btn-sm btn-danger"> Delete </button>
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                email: {contact.address}
              </small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                email: {contact.phone}
              </small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                email: {contact.email}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

UserContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

export default UserContactCard;
