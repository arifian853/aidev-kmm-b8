import { FaReact } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="backdrop-blur-sm p-5 md:px-10 m-5 rounded-lg shadow-lg border-0"
            style={{
              backgroundColor: 'rgba(239, 239, 239, 0.9)',
              boxShadow: '0 8px 25px rgba(20, 184, 166, 0.1)'
            }}>
        <p className="text-center display-font flex items-center justify-center gap-2"
           style={{ color: 'var(--black)' }}>
          <span 
            style={{
              background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
            AI Development
          </span>
          , {new Date().getFullYear()}. Made with React 
          <span style={{ color: '#14b8a6' }}>
            <FaReact />
          </span>
        </p>
    </footer>
  )
}