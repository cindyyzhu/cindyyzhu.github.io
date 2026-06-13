import { useEffect, useRef, useState } from 'react'
import styles from './Modal.module.css'

export default function Modal({ url, title, onClose }) {
  const [blocked, setBlocked] = useState(false)
  const overlayRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.actions}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.externalBtn}>
              Open in new tab ↗
            </a>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>
        <div className={styles.body}>
          {blocked ? (
            <div className={styles.blockedMsg}>
              <p>This site doesn't allow embedding.</p>
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.fallbackLink}>
                Open {title} in a new tab ↗
              </a>
            </div>
          ) : (
            <iframe
              src={url}
              title={title}
              className={styles.iframe}
              onError={() => setBlocked(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          )}
        </div>
      </div>
    </div>
  )
}
