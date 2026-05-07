import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import { ToastProvider } from '@/components/ui/Toast'

export const metadata = {
  title: 'TROY — 너라는 운율',
  description: '120화 시리얼 운영 콘솔',
}

// Synchronously read the persisted theme choice and stamp <html data-theme>
// before React hydrates, to avoid a flash of the wrong palette.
const themeBootstrap = `(function(){try{var v=localStorage.getItem('troy:theme');if(v==='light'||v==='dark'){document.documentElement.setAttribute('data-theme',v);}}catch(e){}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <ToastProvider>
          <div className="troy-app-shell">
            <Sidebar />
            <main className="troy-main">
              <div className="troy-main__inner">{children}</div>
            </main>
          </div>
        </ToastProvider>
      </body>
    </html>
  )
}
