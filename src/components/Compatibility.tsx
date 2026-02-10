import styles from './Compatibility.module.css'

const FRAMEWORKS = [
  { name: 'Google ADK', ver: '1.15', desc: 'Agent framework', popular: true },
  { name: 'LangGraph', ver: 'Latest', desc: 'Orchestration', popular: false },
  { name: 'FastAPI', ver: '0.119', desc: 'HTTP / SSE / WS', popular: false },
  { name: 'OpenAI', ver: '2.3', desc: 'LLM Provider', popular: false },
  { name: 'Gemini', ver: '—', desc: 'LLM Provider', popular: false },
  { name: 'LiteLLM', ver: '—', desc: 'Multi-provider', popular: false },
]

const DEPLOY = [
  { name: 'Docker', desc: 'Containerized deploy' },
  { name: 'Heroku', desc: 'One-click cloud' },
  { name: 'PostgreSQL', desc: 'Session store' },
  { name: 'Redis', desc: 'Caching layer' },
]

export function Compatibility() {
  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className="section-title">Universal Compatibility</h2>
        <p className="section-subtitle">
          One framework, endless possibilities. Mix any LLM provider with any deployment target.
        </p>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>
            Frameworks & Providers
            <span className={styles.groupNote}>Unified API across all providers</span>
          </h3>
          <div className={styles.grid6}>
            {FRAMEWORKS.map((f) => (
              <div key={f.name} className={styles.card}>
                {f.popular && <span className={styles.tag}>Popular</span>}
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
