import {


  Grid,
  
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import Loading from "../components/Loading";
import Input from "../components/Input";

function MainPage() {
  const [isAsked, setIsAsked] = useState(false);

  const [hasError, setHasError] = useState(false);



  const answers = [
    "CEVAP",
    "diğer"
  ];

  const [questions, setQuestions] = useState([]);

  function askQuestion(text) {
    if (isAsked) {
      return;
    }
    if (text.trim().length === 0) {
      setHasError(true);
      return;
    }
    if (!hasError) {
      setQuestions((prev) => [...prev, text]);
      setText("");
      console.log(questions);
      setIsAsked(true);
      setTimeout(function () {
        setQuestions((prev) => [
          ...prev,
          answers[Math.floor(Math.random() * 2)],
        ]);
        setIsAsked(false);
      }, 2000);
    }
  }

  function clearChat() {
    if (!isAsked) {
      setQuestions([]);
      setIsAsked(false);
    }
  }

  const [text, setText] = useState("");

  function textFieldHandler(value) {
    console.log(value);
    setHasError(false);
    setText(value.target.value);
  }
  const lastMessageRef = useRef(null);

  useEffect(()=>{
    lastMessageRef.current?.scrollIntoView({behavior: "smooth",block: "end"});
  },[isAsked])

  return (
    <>
      <Grid container >
        <Navbar clearChat={clearChat} />

        <Chat questions={questions} />

        <Loading isAsked={isAsked} />
        <div ref={lastMessageRef} />
        <Input
          hasError={hasError}
          text={text}
          textFieldHandler={textFieldHandler}
          askQuestion={askQuestion}
          isAsked={isAsked}
        />
                

      </Grid>
    </>
  );
}

export default MainPage;
