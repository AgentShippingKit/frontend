import styles from './Compatibility.module.css'

const FRAMEWORKS = [
  { name: 'Google ADK', ver: '1.15', desc: 'Agent engine', popular: true },
  { name: 'LangGraph', ver: '0.2', desc: 'Agent engine', popular: false },
  { name: 'FastAPI', ver: '0.119', desc: 'REST & SSE API', popular: false },
  { name: 'OpenAI', ver: '2.3', desc: 'LLM Provider', popular: false },
  { name: 'Gemini', ver: '1.36', desc: 'LLM Provider', popular: false },
  { name: 'Claude', ver: '—', desc: 'LLM Provider', popular: false },
]

const DEPLOY = [
  { name: 'Docker', desc: 'Containerized deploy' },
  { name: 'Heroku', desc: 'One-command cloud deploy' },
  { name: 'PostgreSQL', desc: 'Session store' },
  { name: 'Opik', desc: 'Observability & tracing' },
]

export function Compatibility() {
  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className="section-title">Built-in Compatibility</h2>
        <p className="section-subtitle">
          Two execution engines, three LLM providers, and production infrastructure — all configured through YAML.
        </p>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>
            Engines & Providers
            <span className={styles.groupNote}>Switch per agent via YAML config</span>
          </h3>
          <div className={styles.grid6}>
            {FRAMEWORKS.map((f) => (
              <div key={f.name} className={styles.card}>
                {f.popular && <span className={styles.tag}>Default</span>}
                <div className={styles.cardName}>{f.name}</div>
                <div className={styles.cardVer}>{f.ver}</div>
                <div className={styles.cardDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Infrastructure</h3>
          <div className={styles.grid4}>
            {DEPLOY.map((d) => (
              <div key={d.name} className={styles.card}>
                <div className={styles.cardName}>{d.name}</div>
                <div className={styles.cardDesc}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
