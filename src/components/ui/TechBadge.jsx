const TechBadge = ({ name }) => (
  <span className="px-6 py-3 rounded-xl bg-secondary/5 border border-secondary/30 text-secondary font-bold text-sm hover:bg-secondary/10 transition-all cursor-default">
    {name}
  </span>
);

export default TechBadge;