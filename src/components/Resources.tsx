import styles from './Resources.module.css'

const ITEMS = [
  { title: 'Quick Start', desc: 'From zero to running agent in 3 commands', link: 'README', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem#-quick-start' },
  { title: 'Architecture', desc: 'Deep dive into how AgentShip is built', link: 'Architecture', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem#-architecture' },
  { title: 'Create an Agent', desc: 'YAML + Python pattern step by step', link: 'Create Agent', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem#-create-your-first-agent' },
  { title: 'Articles', desc: 'Blog posts on agentic AI patterns', link: 'ai/articles', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/articles' },
  { title: 'Postman Collection', desc: 'Ready-to-use API collection for testing', link: 'postman/', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/postman' },
  { title: 'Sphinx Docs', desc: 'Auto-generated API reference with types', link: 'docs_sphinx/', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/docs_sphinx' },
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
