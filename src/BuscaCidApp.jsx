import { useState } from 'react'

const cidData = [
  { codigo: 'A00', descricao: 'Cólera' },
  { codigo: 'A01', descricao: 'Febres tifóide e paratifóide' },
  { codigo: 'J45', descricao: 'Asma' },
  { codigo: 'F32', descricao: 'Episódios depressivos' }
]

export default function BuscaCidApp() {
  const [termo, setTermo] = useState('')
  const [resultados, setResultados] = useState([])

  const buscar = () => {
    const termoNormalizado = termo.toLowerCase()
    const filtrados = cidData.filter(
      item =>
        item.codigo.toLowerCase().includes(termoNormalizado) ||
        item.descricao.toLowerCase().includes(termoNormalizado)
    )
    setResultados(filtrados)
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#1E3A8A' }}>BuscaCid</h1>
      <p>Busque por código CID-10 ou nome da condição</p>

      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Ex: A00 ou asma"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          style={{ flex: 1, padding: '0.5rem' }}
        />
        <button onClick={buscar} style={{ padding: '0.5rem' }}>Buscar</button>
      </div>

      <ul>
        {resultados.map((item, index) => (
          <li key={index}>
            <strong>{item.codigo}</strong>: {item.descricao}
          </li>
        ))}
      </ul>
    </main>
  )
}
