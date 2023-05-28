import React, { useEffect, useState } from "react";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface HelloCodeProps {}

interface Text {
  text: string;
  language: string;
}

function HelloCode(props: HelloCodeProps) {
  const TEXTS: Text[] = [
    {
      text: 'console.log("Hello 👋! I\'m Felipe.");',
      language: "javascript",
    },
    {
      text: 'print("Hello 👋! I\'m Felipe.")',
      language: "python",
    },
    {
      text: 'System.out.println("Hello 👋! I\'m Felipe.");',
      language: "java",
    },
    {
      text: 'fmt.Println("Hello 👋! I\'m Felipe.")',
      language: "go",
    },
    {
      text: 'Console.WriteLine("Hello 👋! I\'m Felipe.");',
      language: "csharp",
    },
  ];

  const [messages, setMessages] = useState<Text[]>(TEXTS);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [waitBeforeDeleting, setWaitBeforeDeleting] = useState(false);

  useEffect(() => {
    setMessages(TEXTS.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTyping) {
      if (currentMessage.length < messages[currentMessageIndex].text.length) {
        timeout = setTimeout(() => {
          setCurrentMessage(
            currentMessage +
              messages[currentMessageIndex].text.charAt(currentMessage.length)
          );
        }, 25);
      } else {
        setCurrentLanguage(messages[currentMessageIndex].language);
        setIsTyping(false);
        setWaitBeforeDeleting(true);
      }
    } else if (isDeleting) {
      if (currentMessage.length === 0) {
        setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
        setIsTyping(true);
        setIsDeleting(false);
        setWaitBeforeDeleting(false);
      } else {
        timeout = setTimeout(() => {
          setCurrentMessage(currentMessage.slice(0, -1));
        }, 25);
      }
    } else if (waitBeforeDeleting) {
      timeout = setTimeout(() => {
        setCurrentLanguage("");
        setIsDeleting(true);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [
    currentMessage,
    currentMessageIndex,
    isTyping,
    isDeleting,
    waitBeforeDeleting,
  ]);

  return (
    <>
      <div className="text-white font-mono text-md lg:text-2xl">
        <SyntaxHighlighter
          className="blinking-cursor"
          style={oneDark}
          language={currentLanguage}
        >
          {currentMessage}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export { HelloCode };
