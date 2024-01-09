import { useState } from "react";
import { getDadJoke } from "../../api/api";

const JokeGenerator = () => {
  const [joke, setJoke] = useState('')

  const getJoke = async () => {
    const { joke } = await getDadJoke()
    setJoke(joke)
  }
  
  
  return ( 
    <section className="generator-section">
      <div className="generator-section-content flex">
        <h1 className="generator-section-title">
          Click the button below to generate joke, HaHa!
        </h1>

        <button className="joke-generator-button btn" onClick={() => {
          setJoke('Loading...')
          getJoke()
        }}>Generate Joke</button>
      </div>

      <div className="joke-output">
        <h2>{joke}</h2>
      </div>
    </section>
  );
}
 
export default JokeGenerator;