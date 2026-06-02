"use client"
import { useEffect, useState } from 'react'
import EventCard from "../components/EventCard"

interface Event {
    id: number, 
    nom: string, 
    data: Date, 
    ciutat: string,
}

export default function Page() {
  const [data, setData] = useState<Event[]>([])
  const [error, setError] = useState<string>("")

  useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((d) => {
        setData(d.eventos)
      })
      .catch(() => {
        setError("Error Carga")
      })
  }, [])

  const events = data

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
