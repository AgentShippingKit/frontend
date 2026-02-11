import { useState } from 'react'
import styles from './Changelog.module.css'

interface ChangelogEntry {
  id: string
  date: string
  title: string
  description: string
  type: 'feature' | 'fix' | 'improvement'
  link?: string
}

interface MonthGroup {
  month: string
  entries: ChangelogEntry[]
}

const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    id: '2026-02-10',
    date: '2026-02-10',
    title: 'Version 1.2.0 Released',
    description: 'Major update with enhanced agent orchestration capabilities and improved error handling.',
    type: 'feature',
  },
  {
    id: '2026-02-05',
    date: '2026-02-05',
    title: 'Performance Improvements',
    description: 'Optimized agent execution time by 40% through better caching strategies.',
    type: 'improvement',
  },
  {
    id: '2026-02-01',
    date: '2026-02-01',
    title: 'Bug Fix: Memory Leak',
    description: 'Fixed memory leak in long-running agent sessions.',
    type: 'fix',
  },
  {
    id: '2026-01-28',
    date: '2026-01-28',
    title: 'New Tool Support',
    description: 'Added support for custom tool definitions and validation.',
    type: 'feature',
    link: 'https://agentship.readthedocs.io/',
  },
  {
    id: '2026-01-20',
    date: '2026-01-20',
    title: 'Documentation Update',
    description: 'Comprehensive documentation overhaul with new examples and tutorials.',
    type: 'improvement',
    link: 'https://agentship.readthedocs.io/',
  },
  {
    id: '2026-01-15',
    date: '2026-01-15',
    title: 'Version 1.1.0 Released',
    description: 'Added multi-agent coordination and improved streaming responses.',
    type: 'feature',
  },
  {
    id: '2026-01-10',
    date: '2026-01-10',
    title: 'Bug Fix: Rate Limiting',
    description: 'Fixed rate limiting issues with concurrent agent requests.',
    type: 'fix',
  },
  {
    id: '2025-12-20',
    date: '2025-12-20',
    title: 'Version 1.0.0 Released',
    description: 'Initial stable release of AgentShip with core functionality.',
    type: 'feature',
  },
  {
    id: '2025-12-15',
    date: '2025-12-15',
    title: 'Beta Launch',
    description: 'AgentShip enters public beta with full documentation.',
    type: 'feature',
  },
]

function groupByMonth(entries: ChangelogEntry[]): MonthGroup[] {
  const groups: { [key: string]: ChangelogEntry[] } = {}

  entries.forEach((entry) => {
    const date = new Date(entry.date)
    const monthKey = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })

    if (!groups[monthKey]) {
      groups[monthKey] = []
    }
    groups[monthKey].push(entry)
  })

  return Object.entries(groups).map(([month, entries]) => ({
    month,
    entries: entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  }))
}

export function Changelog() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEntries = CHANGELOG_DATA.filter(
    (entry) =>
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const monthGroups = groupByMonth(filteredEntries)

  const getTypeBadgeClass = (type: string) => {
    switch (type) {
      case 'feature':
        return styles.badgeFeature
      case 'fix':
        return styles.badgeFix
      case 'improvement':
        return styles.badgeImprovement
      default:
        return ''
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Changelog</span>
        </h1>
        <p className={styles.subtitle}>
          Stay updated with the latest features, improvements, and fixes
        </p>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search changelog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <svg
            className={styles.searchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        {monthGroups.length > 0 ? (
          monthGroups.map((group) => (
            <div key={group.month} className={styles.monthSection}>
              <h2 className={styles.monthTitle}>{group.month}</h2>
              <div className={styles.entriesGrid}>
                {group.entries.map((entry) => (
                  <div key={entry.id} className={styles.entryCard}>
                    <div className={styles.entryHeader}>
                      <span className={`${styles.typeBadge} ${getTypeBadgeClass(entry.type)}`}>
                        {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                      </span>
                      <span className={styles.date}>
                        {new Date(entry.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <h3 className={styles.entryTitle}>{entry.title}</h3>
                    <p className={styles.entryDescription}>{entry.description}</p>
                    {entry.link && (
                      <a href={entry.link} className={styles.entryLink} target="_blank" rel="noopener noreferrer">
                        Learn more →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            <p>No changelog entries found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
