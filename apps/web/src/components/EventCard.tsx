

interface Props 
    {res: { id: number, nom: string, data: Date, ciutat: string, }
}

export default function EventCard({res}: Props) {
    return(`
        <div className="Card">
            <h3>${res.nom}</h3>
            <h2>${res.ciutat}</h2>
            <p>${res.data}</p>
        </div>
    `)
}