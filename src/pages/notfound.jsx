import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Pedasus Software – Sivua ei löytynyt'
  }, [])

  return (
    <main>Page Not Found</main>
  )
}