import express from "express"

const eventos = [
    { 
        id: "ev1", nom: "Hackathon Fullstack", data: "2026-05-20", ciutat: "Barcelona" 
    },
    { 
        id: "ev2", nom: "Hackatron MiniStack", data: "2027-01-20", ciutat: "Premia" 
    },
    { 
        id: "ev3", nom: "StackFull TonHacka", data: "2026-02-20", ciutat: "Badalona" 
    },
    { 
        id: "ev4", nom: "Evento Cuarto", data: "2027-03-20", ciutat: "Sant adri" 
    }
]

const get_events = async (req, res) => {
    try {
        res.json({
            eventos
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}