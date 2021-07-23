import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
} from "react";
import { Hello } from "./Hello";
import { useFetch } from "./useFecth";
import { useForm } from "./useForm";
import { Hello2 } from "./Hello2";
import { useMeasure } from "./useMeasure";
import { useMeasure2 } from "./useMeasure2";
import { Hello3 } from "./Hello3";

const App = () => {
  // useState
  const [count, setCount] = useState(10);
  const [{ count2, count3 }, setCounters] = useState({
    count2: 10,
    count3: 20,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, handleChange] = useForm({
    email2: "",
    password2: "",
    firstName2: "",
  });

  // useEffect
  useEffect(() => {
    console.log("useEffect: render when email2 is loaded / changed");
  }, [values.email2]);

  useEffect(() => {
    console.log("useEffect: renders when loaded (like component did mount)");
  }, []);

  useEffect(() => {
    console.log(
      "useEffect: render when it is unmounted (like component did unmount)"
    );
  }, []);
  // ---

  const [showHello, setShowHello] = useState(false);
  // ---

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    // ---

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });
  // ---

  const [count4, setCount4] = useState(
    () => JSON.parse(localStorage.getItem("count4")) || 42
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count4}/trivia`);
  // ---

  useEffect(() => {
    localStorage.setItem("count4", JSON.stringify(count4));
  }, [count4]);

  // useRef

  const inputRef = useRef();
  const helloThere = useRef(() => console.log("I am a function from a ref!"));

  // useLayoutEffect (recommended only if useEffect couses problems)
  // it IS useEffect, but syncrhonous after all DOM is loaded.
  // Cool if you wanna measure a box or element after rendering

  useLayoutEffect(() => {
    // console.log(inputRef.current.getBoundingClientRect());
  });

  const [rect, setRect] = useState({});
  const divRef = useRef();
  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [data, setRect]);

  // Creating a custom hook to do so...
  const rect2 = useMeasure(divRef, [data]);

  // Or even better, passing only the data
  const [rect3, inputRef2] = useMeasure2([]);

  // useCallback
  // Important when you don`t want to re-fire triggers with your function
  const [count5, setCount5] = useState(0);

  const increment = useCallback(() => {
    setCount5((c) => c + 1);
  }, [setCount5]);

  // useMemo
  // Start without and if something is really slow, start memoing.
  // It only re-renders the component when some condition is met and not after
  // every parent change

  // This example have a counter and whenever it changes, the fetch function fetchs
  // and counts longest word of list. Memo is there to prevent it from rendering again
  // when counter changes

  const [count6, setCount6] = useState(0);
  const data2 = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  ).data;

  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }

    console.log("computing longest word...");

    let longestWord = "";

    JSON.parse(arr).forEach((sentence) =>
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );

    return longestWord;
  }, []);

  // Abaixo a função computeLongestWord atualiza sempre, se for retirada
  // da dependencia do use memo, seria bem melhor! Mas não é legal retirar
  // se é necessária e tem esse problema, enviar para fora da função App.
  // Do contrário, usar o useCallback (se for para manter dentro do componente)
  // WTF? AM I speaking Portuguese now?
  // const longestWord = useMemo(
  //   () => computeLongestWord(data2),
  //   [data2, computeLongestWord]
  // );

  const longestWord = useMemo(
    () => computeLongestWord(data2),
    [data2, computeLongestWord]
  );

  return (
    <>
      <div>
        <h2>useState</h2>
        <div>
          First example:
          <div>{count}</div>
          {/* call setCount this way... */}
          <button onClick={() => setCount(count + 1)}>+1</button>
          {/* or this way... */}
          <button onClick={() => setCount((currentCount) => currentCount + 1)}>
            +1
          </button>
        </div>
        <hr />
        <div>
          Second example:
          <div>count 2: {count2}</div>
          <div>count 3: {count3}</div>
          <button
            onClick={() =>
              setCounters((currentState) => ({
                count2: currentState.count2 + 1,
              }))
            }
          >
            +1
          </button>
          <button
            onClick={() =>
              setCounters((currentState) => ({
                ...currentState,
                count2: currentState.count2 + 1,
              }))
            }
          >
            +1
          </button>
          <hr />
        </div>
        <div>
          Third example: <br />
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef2}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {email}
          <br />
          {password}
          <hr />
        </div>
        <div>
          4th example (with custom hook): <br />
          <input name="email2" value={values.email2} onChange={handleChange} />
          <input
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          />
          <br />
          {values.email2}
          <br />
          {values.password2}
        </div>
      </div>
      <div>
        <h2>useEffect</h2>
        {showHello && <Hello />}
        <button onClick={() => setShowHello(!showHello)}>Show/Hide</button>
        <hr />
        Mouse position. X: {mousePos.x} / Y: {mousePos.y}
        <hr />
        <div ref={divRef} style={{ display: "inline-flex" }}>
          {loading ? "Loading..." : data}
        </div>
        <br />
        <button onClick={() => setCount4(count4 + 1)}>+</button>
        <button onClick={() => setCount4(count4 - 1)}>-</button>
      </div>
      <div>
        <h2>useRef</h2>
        <input ref={inputRef} name="nome"></input>
        <button
          onClick={() => {
            inputRef.current.focus();
            helloThere.current();
          }}
        >
          Focus
        </button>
        <hr />
        <Hello2 />
      </div>
      <div>
        <h2>useLayoutEffect</h2>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
        <br />
        <pre>{JSON.stringify(rect2, null, 2)}</pre>
        <br />
        <pre>{JSON.stringify(rect3, null, 2)}</pre>
      </div>
      <div>
        <h2>useCallBack</h2>
        <Hello3 increment={increment} />
        <div>count: {count5}</div>
        <hr />
      </div>
      <div>
        <h2>useMemo</h2>
        <div>count: {count6}</div>
        <button
          onClick={() => {
            setCount6((c) => c + 1);
          }}
        >
          +1
        </button>
        <div>Longest word: {longestWord}</div>
      </div>
    </>
  );
};

export default App;
