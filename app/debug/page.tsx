export default function DebugPage() {
  return (
    <main style={{padding: '4rem', fontFamily: 'sans-serif'}}>
      <h1>Debug Page</h1>
      <p>This is a minimal server-rendered page to check hydration.</p>
      <p>Server time: {new Date().toISOString()}</p>
    </main>
  )
}
