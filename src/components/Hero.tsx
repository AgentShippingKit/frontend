import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBg} />
      <div className={styles.glow} />

      <div className={styles.inner}>
        {/* Big logo */}
        <div className={styles.bigLogo}>
          <span className={styles.logoAgent}>Agent</span>
          <span className={styles.logoShip}>Ship</span>
        </div>

        <h1 className={styles.title}>
          The <span className="gradient-text">Production Layer</span>
          {' '}for AI&nbsp;Agents
        </h1>

        <p className={styles.subtitle}>
          Build and deploy AI agents in minutes, not weeks. REST&nbsp;API, session management,
          observability, streaming, and one&#8209;command deployment.
        </p>

        <div className={styles.ctas}>
          <a href="#quickstart" className={styles.primaryBtn}>
            Get Started
          </a>
          <a
            href="https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem#-quick-start"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  )
}
