import { Link } from 'react-router-dom';
import type { AppInfo } from '../data/apps';

interface AppCardProps {
  app: AppInfo;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link to={`/app/${app.id}`} className="app-card">
      <div className="app-card-icon" style={{ backgroundColor: app.iconBg }}>
        <span>{app.icon}</span>
      </div>
      <div className="app-card-info">
        <h3 className="app-card-name">{app.name}</h3>
        <p className="app-card-tagline">{app.tagline}</p>
        <div className="app-card-tags">
          {app.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="app-card-action">
        <span
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(app.liveUrl, '_blank', 'noopener,noreferrer');
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              window.open(app.liveUrl, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          Open
        </span>
      </div>
    </Link>
  );
}
