import React from "react";
import PropTypes from "prop-types";
import avatar from "../assets/img/avatar.png"

const UserContactCard = ({ contact }) => {
  return (
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={avatar} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <p class="card-text">
              <small class="text-body-secondary">
                email: {contact.address}
              </small>
            </p>
            <p class="card-text">
              <small class="text-body-secondary">
                email: {contact.phone}
              </small>
            </p>
            <p class="card-text">
              <small class="text-body-secondary">
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
