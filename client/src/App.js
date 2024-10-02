import { useState } from 'react';

import { GreeterClient } from "./protos/greeting_grpc_web_pb";
import { GreetRequest } from "./protos/greeting_pb";

import LogoSvg from './assets/logo';

const greetClient = async (name) => {
  const EnvoyURL = "http://localhost:8000";
  const client = new GreeterClient(EnvoyURL);
  const request = new GreetRequest();
  request.setName(name);

  const response = await client.greet(request, {});

  const div = document.getElementById("response");
  if (div) div.innerText = response.getMessage();
};

function App() {
  const [inputValue, setInputValue] = useState('');

  function handleSubmitText(data) {
    setInputValue(data);
    if (data) greetClient(data);
  }

  return (
    <div className="grid h-screen place-items-center gap-6 px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-base animate-pulse font-semibold text-indigo-600">gRPC Project</p>
        
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Hello {inputValue}</h1>
        <p className="mt-6 text-base leading-7">Inform a username to continue:</p>
        <div id="response"></div>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <form
            className='flex gap-4'
            onSubmit={(e) => { 
              e.preventDefault();
              handleSubmitText(e.target.querySelector('input')?.value);
            }}
          >
            <input
              type="text"
              className="border rounded p-2 w-96"
              placeholder="Type something..."
            />

            <button type='submit' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Submit
            </button>
          </form>
        </div>
      </div>

      <LogoSvg />
    </div>
  );
}

export default App;
