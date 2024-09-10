//Styles
import "../styles/BodyInformation.css";

const BodyInformation = () => {
  return (
    <div className="body-information">
      <div className="body-information-main">
        <div className="body-information-img"></div>
        <div className="body-information-text">
          <h2>What&apos;s happening</h2>
          <p>
            I&apos;ll be implementing list virtualization to efficiently handle
            large datasets in React. Instead of rendering all list items at
            once, only the elements currently visible in the viewport will be
            rendered. This optimization significantly improves performance by
            reducing the number of DOM nodes and preventing unnecessary
            re-renders, making it ideal for large datasets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyInformation;
