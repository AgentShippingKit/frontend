import { useState } from 'react'
import styles from './Changelog.module.css'

type ChangelogEntry = {
  date: string
  title: string
  description: string
  type: 'feature' | 'fix' | 'improvement'
  link?: string
}

type MonthData = {
  month: string
  entries: ChangelogEntry[]
}

// Sample changelog data - organized by month
const CHANGELOG_DATA: MonthData[] = [
  {
    month: 'February 2026',
    entries: [
      {
        date: 'Feb 11, 2026',
        title: 'Changelog Page Launch',
        description: 'Added a dedicated changelog page to track all updates and improvements to AgentShip. Features month-wise organization and search functionality.',
        type: 'feature',
        link: 'https://github.com/AgentShippingKit/agent-ship'
      },
      {
        date: 'Feb 5, 2026',
        title: 'Enhanced Documentation',
        description: 'Improved documentation with more examples and better navigation structure.',
        type: 'improvement',
        link: 'https://agentship.readthedocs.io/'
      }
    ]
  },
  {
    month: 'January 2026',
    entries: [
      {
        date: 'Jan 28, 2026',
        title: 'Performance Improvements',
        description: 'Optimized agent initialization and reduced startup time by 40%.',
        type: 'improvement'
      },
      {
        date: 'Jan 15, 2026',
        title: 'Bug Fix: Memory Leak',
        description: 'Fixed a memory leak issue in long-running agent sessions.',
        type: 'fix'
      },
      {
        date: 'Jan 10, 2026',
        title: 'New Tool Integration',
        description: 'Added support for custom tool integration, allowing developers to extend agent capabilities.',
        type: 'feature',
        link: 'https://github.com/AgentShippingKit/agent-ship'
      }
    ]
  },
  {
    month: 'December 2025',
    entries: [
      {
        date: 'Dec 20, 2025',
        title: 'AgentShip v1.0 Release',
        description: 'Official release of AgentShip framework with support for building and deploying AI agents.',
        type: 'feature',
        link: 'https://github.com/AgentShippingKit/agent-ship'
      },
      {
        date: 'Dec 15, 2025',
        title: 'Beta Testing Complete',
        description: 'Completed beta testing phase with valuable feedback from early adopters.',
        type: 'improvement'
      }
    ]
  }
]

export function Changelog() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter entries based on search query
  const filteredData = CHANGELOG_DATA.map(month => ({
    ...month,
    entries: month.entries.filter(entry =>
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(month => month.entries.length > 0)

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'feature': return styles.badgeFeature
      case 'fix': return styles.badgeFix
      case 'improvement': return styles.badgeImprovement
      default: return styles.badgeFeature
    }
  }

  return (
    <div className={styles.changelogPage}>
      {/* Hero Section with Title and Search */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Changelog</h1>
        <p className={styles.subtitle}>
          Stay updated with the latest features, improvements, and bug fixes
        </p>

        <div className={styles.searchContainer}>
          <svg
            className={styles.searchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search changelog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Changelog Content - Month-wise */}
      <div className={styles.content}>
        {filteredData.length > 0 ? (
          filteredData.map((month, idx) => (
            <div key={idx} className={styles.month}>
              <h2 className={styles.monthTitle}>{month.month}</h2>
              {month.entries.map((entry, entryIdx) => (
                <div key={entryIdx} className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <span className={styles.entryDate}>{entry.date}</span>
                    <span className={`${styles.badge} ${getBadgeClass(entry.type)}`}>
                      {entry.type}
                    </span>
                  </div>
                  <h3 className={styles.entryTitle}>{entry.title}</h3>
                  <p className={styles.entryDescription}>{entry.description}</p>
                  {entry.link && (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.entryLink}
                    >
                      Learn more
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3.5 1h7.5v7.5M11 1L4.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              ))}
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
