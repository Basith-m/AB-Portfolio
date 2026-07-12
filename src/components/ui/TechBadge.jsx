const TechBadge = ({ name }) => (
  <span className="px-4 py-2 md:px-6 md:py-3 rounded-[32px] md:rounded-[40px] bg-secondary/5 border border-secondary/30 text-secondary font-bold text-xs md:text-sm hover:bg-secondary/10 transition-all cursor-default">
    {name}
  </span>
);

export default TechBadge;