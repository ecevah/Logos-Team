import React, { useState } from 'react';
import styles from '../../styles/Chatbot.module.scss';


const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  //const openaiClient = new openai.ApiClient(process.env.OPENAI_API_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: input }]);
    setInput('');

    /*try {
      const response = await openaiClient.createCompletion({
        engine: 'text-davinci-002',
        prompt: input,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      });

      const message = response.choices[0].text.trim();
      setMessages((prevMessages) => [...prevMessages, { sender: 'chatbot', text: message }]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
    }
};*/

  return (
    <div className={styles.chatbot}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div key={index} className={styles[message.sender]}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
          placeholder="Type your message..."
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  )}}

export default Chatbot;
