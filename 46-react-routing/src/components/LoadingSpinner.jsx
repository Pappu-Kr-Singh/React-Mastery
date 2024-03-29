const LoadingSpinner = () => {
  return (
    <div className="d-flex text-success justify-content-center spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
