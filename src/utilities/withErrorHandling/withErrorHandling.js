import React, { useState, useEffect } from "react";

import Modal from "../Modal/Modal";

const withErrorHandling = (WrappedComponent, axios) => {
  return props => {
    const [error, updateError] = useState(null);

    useEffect(() => {
      const requestInt = axios.interceptors.request.use(req => {
        updateError(null);
        return req;
      });
      axios.interceptors.response.use(
        resp => resp,
        error => {
          updateError(error);
        }
      );
      return axios.interceptors.request.eject(requestInt);
    }, []);

    useEffect(() => {
      const responseInt = axios.interceptors.response.use(
        resp => resp,
        error => {
          updateError(error);
        }
      );
      return axios.interceptors.response.eject(responseInt);
    }, []);

    return (
      <React.Fragment>
        <Modal show={error} clickBackdrop={() => updateError(null)}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandling;
