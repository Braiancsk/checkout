import { useState } from 'react'
import { FormProvider } from './context/FormContext'
import FirstStepForm from './views/FirstStepForm/FirstStepForm'
import SecondStepForm from './views/SecondStepForm/SecondStepForm'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [isFirstStepForm, setIsFirstStepForm] = useState(true)


  return (
    <FormProvider>
      <Routes>
        <Route path='/checkout/:id' element={
          <main className="App min-h-screen flex justify-center flex-col items-center bg-[#F5F5F5]">
          {isFirstStepForm ? <FirstStepForm nextStepForm={() => setIsFirstStepForm(false)}/> : <SecondStepForm />}
          </main>
        } />

        <Route path="/obrigado" element={<h1>Obrigado</h1>}/>
  
      </Routes>



    </FormProvider>
  )
}

export default App