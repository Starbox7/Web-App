// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   min-height: 100vh;
//   background-color: #f2f2f2;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   max-width: 500px;
//   padding: 2rem;
//   background-color: #ffffff;
//   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   margin: 0.5rem 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.5rem;
//   margin-top: 1rem;
//   color: #ffffff;
//   background-color: #007bff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const WSTHome = () => {
//   const [to, setTo] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = async (e) => {
//     console.log("push");
//     e.preventDefault();

//     try {
//       console.log("client start");
//       const response = await axios.post('http://127.0.0.1:5001/send', { to, content });
//       alert('SMS가 성공적으로 전송되었습니다!');
//       console.log(response.data);
//     } catch (error) {
//       alert('SMS 전송에 실패했습니다.');
//       console.error(error);
//     }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <label htmlFor="to">받는 사람:</label>
//         <Input
//           type="text"
//           id="to"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           required
//         />
//         <label htmlFor="content">메시지 내용:</label>
//         <Input
//           type="text"
//           id="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         />
//         <Button type="submit">SMS 전송!</Button>
//       </Form>
//     </Container>
//   );
// };

// export default WSTHome;

// Login.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #007aff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005ad6;
  }
`;

const SignUpButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #007aff;
  color: #007aff;

  &:hover {
    background-color: #007aff;
    color: #fff;
  }
`;

const WSTHome = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직
    console.log('ID:', id);
    console.log('Password:', password);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">로그인</Button>
        <SignUpButton type="button">회원가입</SignUpButton>
      </FormContainer>
    </Container>
  );
};

export default WSTHome;
