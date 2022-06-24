import CircleLoader from "react-spinners/CircleLoader";

const LoadingPage = () => {
console.log("loading page has loaded")

  return (
    <div className="loading-spinner">
      <div className="spinner-div" data-testid="loadingPage-spinner">
        <CircleLoader size={100} speedMultiplier={3} color={"#BD2100"} />
        <div>
          <h3 className="loading-text" data-testid="loadingPage-text"> Loading... </h3>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
