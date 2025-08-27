import "./ProgressBar.css";
function ProgressBar({ width }) {
  return (
    <div className="progress-bar">
      <div className="progress-header">
        <span>🎯 Goal Progress </span>
        <span className="progress-percent">{Math.ceil(width)}%</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
