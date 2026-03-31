export default function SectionHeader({ icon, children }) {
  return (
    <h2 className="section-title">
      <span className="bullet-wrap">
        <img src={icon} className="bullet" alt="" />
      </span>
      {children}
    </h2>
  );
}