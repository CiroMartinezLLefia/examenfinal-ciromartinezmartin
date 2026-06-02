"use client"
import { useEffect, useState } from 'react'
import EventCard from "../components/EventCard"

interface Event {
    id: string, 
    nom: string, 
    data: string, 
    ciutat: string,
}

export default function Page() {
  const [data, setData] = useState<Event[]>([])
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((d) => {
        setData(d.eventos)
        setLoading(false)
      })
      .catch(() => {
        setError("Error Carga")
        setLoading(false)
      })
  }, [])

  const events = data

  if (loading) return <p>Carregant...</p>
  
  if (error) return <p>{error}</p>

  return (
    <>
        <main>
            <h1>Examen Final</h1>
            <div className="grid">
              {events.map((r) => (
                <EventCard key={r.id} res={r}></EventCard>
              ))}
            </div>
        </main>
    </>
  )
}
