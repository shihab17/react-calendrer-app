import './App.css'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <>
      <MainLayout />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to Calendar View</h1>
      </div>
    </>
  )
}

export default App
