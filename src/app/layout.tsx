import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import './globals.css'
import { DefaultTemplateString } from 'next/dist/lib/metadata/types/metadata-types'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '変換ツールズ',
    template: '%s | 変換センタ',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const title = (metadata.title! as DefaultTemplateString).default;
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <div className={styles['header-nav']}>
            <header className={styles['header']}>
              <div className={styles['header-sitetitle']}>
                <Link className={styles['header-sitetitle-a']} href="/">
                  <span>{title}</span> <span style={{fontSize:'10px'}}>by 塩の惑星</span>
                </Link>
              </div>
              <div className={styles['header-description']}>
                様々な変換をWeb上で行えるようにするサイトです。<br/>
                入力データをサーバに送信しないでブラウザ上で変換処理をするので<br/>
                安全に使用できます。
              </div>
              <div><Link href="/info">サイト詳細</Link></div>
              <div><Link href="/contact">問合せ</Link></div>
            </header>
            <nav className={styles.nav}>
            </nav>
          </div>

          <div className={styles['main-parent']}>
            <main className={styles.main}>
              {children}
            </main>
          </div>
          <footer className={styles.footer}>
          <div className={styles['header-sitetitle']}><a className={styles['header-sitetitle-a']} href="/">変換ツールズ <span style={{fontSize:'10px'}}>by 塩の惑星</span></a></div>
          </footer>
        </div>
      </body>
    </html>
  )
}
