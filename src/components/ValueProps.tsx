import styles from './ValueProps.module.css'

const ITEMS = [
  {
    title: 'Easy',
    desc: 'Define agents in YAML, write minimal Python. Auto-discovery, REST API, session management, and streaming — zero boilerplate.',
    color: 'purple',
  },
  {
    title: 'Fast',
    desc: 'Production-ready from day one. Docker hot-reload in dev, one-command deploy to Heroku or any cloud. Ship in minutes.',
    color: 'teal',
  },
  {
    title: 'Reliable',
    desc: 'End-to-end observability with Opik & Langfuse. Structured tracing, token metrics, guardrails, and persistent session memory.',
    color: 'mixed',
  },
]

export function ValueProps() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <article key={item.title} className={`${styles.card} ${styles[item.color]}`}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
