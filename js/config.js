// Configuración para niños en español
const imageMap = {
    'a.png': 'A',
    'b.png': 'B',
    'c.png': 'C',
    'd.png': 'D',
    'e.png': 'E',
    'f.png': 'F',
    'g.png': 'G',
    'h.png': 'H',
    'i.png': 'I',
    'l.png': 'L',
    'm.png': 'M',
    'n.png': 'N',
    'o.png': 'O',
    'p.png': 'P',
    'r.png': 'R',
    's.png': 'S',
    't.png': 'T',
    'u.png': 'U',
    'v.png': 'V'
};

// Estado del juego
let palabrasDisponibles = [];
let currentWord = '';
let userInput = [];
let score = 0;
let timeLeft = 120;