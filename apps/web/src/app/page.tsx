import { useEffect, useState } from 'react'
import EventCard from "../components/EventCard"

interface Event {
    id: number, 
    nom: string, 
    data: Date, 
    ciutat: string,
}

export default function Page() {
  return (
    <>
        <main>
            <h1>Examen Final</h1>
        </main>
    </>
  )
}
