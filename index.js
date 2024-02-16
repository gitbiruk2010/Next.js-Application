import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{background: '#0070f3', padding: '20px', color: 'white'}}>
        <h1>Welcome to Your Next App!</h1>
      </header>

      <main>
        <section style={{margin: '20px 0', padding: '20px', borderBottom: '1px solid #ddd'}}>
          <h2>Section A</h2>
          <p>This is a placeholder for section one.</p>
        </section>
        <section style={{margin: '20px 0', padding: '20px', borderBottom: '1px solid #ddd'}}>
          <h2>Section Two</h2>
          <p>This is a placeholder for section two.</p>
        </section>
        </main>

      <footer style={{background: '#0070f3', padding: '20px', color: 'white', textAlign: 'center'}}>
        <p>© 2024 Your Next App</p>
      </footer>
    </div>
  )
}

