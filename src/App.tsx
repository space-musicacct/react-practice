import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-6">
      <h1 className="text-3xl font-bold text-gray-800">React Practice</h1>
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setCount((c) => c + 1)}
        >
          count: {count}
        </button>
      </div>
      <p className="text-gray-500 text-sm">src/App.tsx を編集して始めよう</p>
    </div>
  )
}

export default App
