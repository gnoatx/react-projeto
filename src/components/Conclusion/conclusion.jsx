import '../styles/conclusion.css';

const ProgressBar = ({ percentage, label }) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${percentage}%` }}>
            <span className="progress-label">{label}</span>
        </div>
        </div>
    );
};

export default ProgressBar;