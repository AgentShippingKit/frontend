import styles from './ValueProps.module.css'

const ITEMS = [
  {
    title: 'Easy',
    desc: 'Define agents in YAML, write minimal Python. Auto-discovery registers agents automatically — no manual wiring, no boilerplate.',
    color: 'purple',
  },
  {
    title: 'Fast',
    desc: 'Production-ready from day one. Docker hot-reload in dev, one-command deploy to Heroku or any cloud with Docker support.',
    color: 'teal',
  },
  {
    title: 'Reliable',
    desc: 'End-to-end observability with Opik tracing and structured logging. Persistent session memory via PostgreSQL or in-memory for dev.',
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
