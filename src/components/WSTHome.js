import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const WSTHome = () => {
  const [to, setTo] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    console.log("push");
    e.preventDefault();

    try {
      console.log("client start");
      const response = await axios.post('http://127.0.0.1:5001/send', { to, content });
      alert('SMS가 성공적으로 전송되었습니다!');
      console.log(response.data);
    } catch (error) {
      alert('SMS 전송에 실패했습니다.');
      console.error(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="to">받는 사람:</label>
        <Input
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <label htmlFor="content">메시지 내용:</label>
        <Input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit">SMS 전송!</Button>
      </Form>
    </Container>
  );
};

export default WSTHome;
