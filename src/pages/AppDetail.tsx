import { useParams, Link } from 'react-router-dom';
import { apps } from '../data/apps';

export default function AppDetail() {
  const { id } = useParams<{ id: string }>();
  const app = apps.find((a) => a.id === id);

  if (!app) {
    return (
      <main className="main">
        <div className="detail-not-found">
          <h2>App not found</h2>
          <Link to="/" className="btn btn-primary">Back to App Store</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="detail">
        <Link to="/" className="detail-back">&larr; Back to all apps</Link>

        <div className="detail-header">
          <div className="detail-icon" style={{ backgroundColor: app.iconBg }}>
            <span>{app.icon}</span>
          </div>
          <div className="detail-header-info">
            <h1 className="detail-name">{app.name}</h1>
            <p className="detail-tagline">{app.tagline}</p>
            <div className="detail-tags">
              {app.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="detail-buttons">
              <a
                href={app.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open App
              </a>
              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Source
              </a>
              {app.landingUrl && (
                <a
                  href={app.landingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Setup &amp; FAQ
                </a>
              )}
            </div>
          </div>
        </div>

        {app.landingUrl && (
          <div className="detail-callout">
            <span className="detail-callout-icon">ℹ️</span>
            <div>
              <strong>First time?</strong> Visit the{' '}
              <a href={app.landingUrl} target="_blank" rel="noopener noreferrer">
                setup &amp; instructions page
              </a>{' '}
              to get access and learn how to use this app.
            </div>
          </div>
        )}

        <section className="detail-section">
          <h2>About this app</h2>
          <p className="detail-description">{app.description}</p>
        </section>

        <section className="detail-section">
          <h2>Features</h2>
          <ul className="detail-features">
            {app.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Built with</h2>
          <div className="detail-tech">
            {app.techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
