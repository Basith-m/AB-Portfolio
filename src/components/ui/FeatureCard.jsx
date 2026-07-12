import GlassPanel from './GlassPanel';

const FeatureCard = ({ icon, title, color = 'secondary' }) => (
  <GlassPanel className={`p-4 md:p-6 hover:border-${color} transition-colors group cursor-default !rounded-2xl md:!rounded-3xl`}>
    <span className={`material-symbols-outlined !text-2xl md:!text-3xl text-${color} mb-2 md:mb-3 group-hover:scale-110 transition-transform`}>
      {icon}
    </span>
    <div className="font-bold text-xs md:text-sm">{title}</div>
  </GlassPanel>
);

export default FeatureCard;