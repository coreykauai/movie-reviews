export default function Title({ onTitleClick }) {
  return (
    <div className="neato glowing-btn">
      <span
        className="glowing-txt"
        onClick={() => {
          onTitleClick(null);
        }}
      >
        M<span className="faulty-letter">O</span>VIE
        <span className="faulty-letter-two">S</span>
      </span>
    </div>
  );
}
