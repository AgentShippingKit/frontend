import styles from './Ecosystem.module.css'

const PROJECTS = [
  { name: 'Agent Framework', tag: 'YAML-based agent configuration with auto-discovery', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework' },
  { name: 'REST & SSE API', tag: 'OpenAI-compatible endpoints with streaming', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/service' },
  { name: 'Observability', tag: 'Opik & Langfuse tracing, metrics, dashboards', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework/observability' },
  { name: 'Session Memory', tag: 'PostgreSQL-backed persistent memory', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework/session' },
  { name: 'Tool System', tag: 'Composable tools with MCP integration', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/src/agent_framework/tools' },
  { name: 'Debug UI', tag: 'Built-in web UI for testing agents', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/debug_ui' },
  { name: 'Sphinx Docs', tag: 'Auto-generated API reference and guides', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/docs_sphinx' },
  { name: 'Docker Deploy', tag: 'Production Dockerfile with compose', href: 'https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem/Dockerfile' },
]

export function Ecosystem() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Ecosystem</h2>
        <p className="section-subtitle">
          Tools and libraries built into AgentShip.
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
