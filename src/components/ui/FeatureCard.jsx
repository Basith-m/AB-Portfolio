import GlassPanel from './GlassPanel';

const FeatureCard = ({ icon, title, color = 'secondary' }) => (
  <GlassPanel className={`p-6 hover:border-${color} transition-colors group cursor-default`}>
    <span className={`material-symbols-outlined text-3xl text-${color} mb-3 group-hover:scale-110 transition-transform`}>
      {icon}
    </span>
    <div className="font-bold text-sm">{title}</div>
  </GlassPanel>
);

export default FeatureCard;