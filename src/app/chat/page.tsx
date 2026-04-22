'use client';

import { useChat } from 'ai/react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './chat.module.css';


export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto scroll to bottom when new messages are added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.backButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarOnlineIndicator} />
            <span className={styles.avatarInitial}>H</span>
          </div>
          <div>
            <h1 className={styles.chatTitle}>Tanya Hilwan</h1>
            <p className={styles.chatSubtitle}>AI Assistant Portofolio</p>
          </div>
        </div>
      </div>

      <div className={styles.messagesArea}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>
              <img src="/logo.svg" alt="Logo" style={{ width: '56px', height: '56px', opacity: 0.8 }} />
            </div>
            <h2>Silakan Bertanya!</h2>
            <p>
              Tanyakan tentang pengalaman saya, skill, edukasi, atau 
              bagikan pertanyaan/tips seputar web design dan UI/UX portofolio.
            </p>
            <div className={styles.suggestionChips}>
              <button onClick={() => handleInputChange({ target: { value: 'Ceritakan tentang pengalaman kerja kamu!' } } as any)}>
                <i className="fa-solid fa-briefcase" style={{ marginRight: '8px', color: 'var(--clr-primary)' }}></i> Pengalaman Kerja
              </button>
              <button onClick={() => handleInputChange({ target: { value: 'Kamu pakai tools desain apa saja?' } } as any)}>
                <i className="fa-solid fa-pen-nib" style={{ marginRight: '8px', color: 'var(--clr-primary)' }}></i> Tools Desain
              </button>
              <button onClick={() => handleInputChange({ target: { value: 'Apa tips desain UI yang bagus?' } } as any)}>
                <i className="fa-solid fa-bolt" style={{ marginRight: '8px', color: 'var(--clr-primary)' }}></i> Tips UI/UX
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.messagesList}>
            {messages.map((m: any) => (
              <div
                key={m.id}
                className={`${styles.messageWrapper} ${m.role === 'user' ? styles.messageUserWrapper : styles.messageAiWrapper}`}
              >
                {m.role !== 'user' && (
                  <div className={styles.msgAvatarWrapper}>
                    <span className={styles.msgAvatar}>H</span>
                  </div>
                )}
                <div className={`${styles.messageBubble} ${m.role === 'user' ? styles.messageUser : styles.messageAi}`}>
                  <p className={styles.messageText}>{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={styles.messageWrapper}>
                <div className={styles.msgAvatarWrapper}>
                  <span className={styles.msgAvatar}>H</span>
                </div>
                <div className={`${styles.messageBubble} ${styles.messageAi} ${styles.typingIndicator}`}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            {error && (
              <div className={`${styles.messageWrapper} ${styles.messageAiWrapper}`}>
                 <div className={`${styles.messageBubble} ${styles.messageError}`}>
                  ⚠️ Permintaan gagal. Pastikan <b>OPENAI_API_KEY</b> kamu sudah diatur di file .env lokal.
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className={styles.inputArea}>
        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <input
            className={styles.inputField}
            value={input}
            placeholder="Ketik pertanyaan untuk Hilwan di sini..."
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button type="submit" className={styles.sendButton} disabled={isLoading || !input.trim()}>
            {isLoading ? (
               <svg className={styles.spinner} viewBox="0 0 24 24" width="20" height="20">
                 <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3"></circle>
                 <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            )}
          </button>
        </form>
        <p className={styles.disclaimer}>Hilwan AI mungkin menampilkan informasi kurang akurat, harap verifikasi info penting.</p>
      </div>
    </div>
  );
}
