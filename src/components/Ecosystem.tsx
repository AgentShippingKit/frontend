import styles from './Ecosystem.module.css'

const PROJECTS = [
  { name: 'Agent Framework', tag: 'YAML-based config with auto-discovery and registry', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework' },
  { name: 'REST & SSE API', tag: 'FastAPI endpoints with SSE streaming support', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/service' },
  { name: 'Observability', tag: 'Opik tracing, structured metrics, and logging', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework/observability' },
  { name: 'Session Memory', tag: 'PostgreSQL or in-memory persistent conversations', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework/session' },
  { name: 'Tool System', tag: 'YAML-configured function and agent tools', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework/tools' },
  { name: 'Debug UI', tag: 'Built-in web UI for testing agents locally', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/debug_ui' },
  { name: 'Documentation', tag: 'API reference, guides, and tutorials', href: 'https://agentship.readthedocs.io/' },
  { name: 'Docker Deploy', tag: 'Production Dockerfile with hot-reload compose', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/Dockerfile' },
]

export function Ecosystem() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Ecosystem</h2>
        <p className="section-subtitle">
          Everything included in AgentShip, ready to use out of the box.
        </p>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.dot}>&middot;</span>
              <span className={styles.tag}>{p.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
