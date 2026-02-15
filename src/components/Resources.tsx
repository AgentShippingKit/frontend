import styles from './Resources.module.css'

const ITEMS = [
  { title: 'Quick Start', desc: 'From zero to running agent in 3 commands', link: 'Docs', href: 'https://docs.agent-ship.dev/en/latest/user-guides/getting-started/quickstart.html' },
  { title: 'Architecture', desc: 'How AgentShip is structured under the hood', link: 'Docs', href: 'https://docs.agent-ship.dev/en/latest/index.html#architecture' },
  { title: 'Agent Patterns', desc: 'Single agent, orchestrator, and tool patterns', link: 'Docs', href: 'https://docs.agent-ship.dev/en/latest/building-agents.html' },
  { title: 'Agent Config', desc: 'YAML config reference — engines, streaming, memory', link: 'Docs', href: 'https://docs.agent-ship.dev/en/latest/user-guides/building-agents/agent-configuration.html' },
  { title: 'Postman Collection', desc: 'Ready-to-use API collection for testing', link: 'GitHub', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/postman' },
  { title: 'Articles', desc: 'Blog posts on agentic AI patterns and design', link: 'GitHub', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/articles' },
]

export function Resources() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Resources</p>
        <h2 className="section-title">Explore guides & references</h2>
        <p className="section-subtitle">
          Everything you need to learn, build, and deploy with AgentShip.
        </p>
        <div className={styles.grid}>
          {ITEMS.map((r) => (
            <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <span className={styles.cardLink}>{r.link}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
