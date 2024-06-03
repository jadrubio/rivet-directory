import React from 'react';
import { useSelector } from 'react-redux';
import { loading } from '../store/profileSlice';
import { Loader } from '../UI/Loader';

const withLoading = (WrappedComponent: React.ComponentType) => {
  const HOC: React.FC = (props) => {
    const isLoading = useSelector(loading);

    if (isLoading) {
      return <Loader loading={isLoading} size={175} />;
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withLoading;
