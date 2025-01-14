// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import style from "./App.module.css";
import { ComponentWithChildren } from "./Components/ComponentWithChildren/ComponentWithChildren";
import { CustomImageFrame } from "./Components/CustomImageFrame/CustomImageFrame";

function App() {
  return (
    <div>
      <header className={style.header}>
        <h1>React component Variations</h1>
      </header>

      <main>
        <section>
          <h2>Paramerized Components</h2>
          <CustomImageFrame 
          src="./src/assets/cat-1.jpg" 
          alt="cat"/>
        </section>

        <section>
          <h2>Component with children</h2>
          <ComponentWithChildren/>
          <li>Hello</li>
          <li>World</li>
          <li>Foo</li>
          <li>Bar</li>
          <li>
            <p>Hello</p>
            <CustomImageFrame src="./src/assets/cat-1.jpg"/>
          </li>
          <ComponentWithChildren/>
        </section>
      </main>
    </div>
  );
}

export default App;
