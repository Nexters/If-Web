import React, { FC } from 'react';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import KakaoButton from '@/components/KakaoButton';
import NaverButton from '@/components/NaverButton';

const Login: FC = () => {
  return (
    <Layout>
      <Logo>
        {/* 임시 로고 */}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAV1BMVEUAAAD///9ycnL8/PwEBAQaGhr5+fkYGBgICAjDw8Nubm4WFhYMDAwfHx/29vZ3d3fS0tLg4ODu7u6dnZ00NDRZWVmKioqjo6OXl5fa2toSEhJ7e3tqamq5KDcuAAAEpklEQVR4nO2cibqqIBSFRdA0s8Fu833/57wMDqE2CQF51386nb5OAosNW6W9iSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGHD+I/V4qwX+UndWdeK6cWoozNZjA8l7P7P5AZ0h/uSwdq+NLVI8+xJiWR12OcVIZQYwA+u8v1h5UkC4+Yo95VoBqUGUqj6pbQ6lXc2dsnqSFKtPYZQcvRhFVZum940H1rqKSXb0qVFZF3sz87cBkN2f1hbxfdlZPyp3PFOtDCe7hEF7kpeeOZMSpTJcWVdCH9ss8idF2bRkdC1mOoWpVAxSdZ8xjsTIfwuVZOT2hRCpROktHR10cVrOalKydqejrow3jknR9eO3NevqqYP7Y2t+sTKqVayEgewQ1t9+qhdn5PWcgg5ODGIqOR03/7OC386Y9rP6448PUWu/FZ+Vy9VzUjrs/zbs6buC+78aKoPUJo7ESGo9B6UjpOkn3pjccy6vmrUeqZyJqTf4FR1sHj3bYs0H0xbo3ZK/AhRJ7KJpxRxL9LvFndCmOZ2UzXcd/s43sjHe2yW4rP7i5pb2v0AdXYJ3OtTMV1vEytnm9ZPdNht7RO084cc5LfphcU9v506FaJVTOkum15YdukbxJMQ0YyzSWnngQuw1c6X9L0MWRoUxpYDj2etoa8YCNmYlLYRQnxNdm1uEmomxKfXureHGFomnn85uLSx1tBX6NVym8QmQuLB3YC1hr6i72VSo6F1a67T/Ashcfe/nm3Yq/elRXp8o82jPBOitZQ9f0cRuBDJUMgIwQsZWVkf1RKykGffDgz+F7IQAeu3mT34RipsISwqiiJJkkVSI15ci2JESrhCxIJ9kY8ueaV5MVhqD1eIGET5mAxBPpgkwQoR7bw+XE1ZX6OeSYIVIkge6SAk6X82YCF8pj9cHKKD+R6wkChaPLbIov/ZoIW8GFq/M0cWj4fW4qfO7E+G1i9N9tl4LQiBkIlACIR8if9IyFyutdizS5R+acEKEddSGFphCZnRjdUshtaMFh9mshwkyIpc2kSLleGPtVyg0wlaiJjvyTVJiqSFv7wm159aMlXMYhF7Vl8rjKgZ1xe8EAEbfanzE0LeIVAhP/v1tIzINIg7YypgwL8QFcJhUlosQglDEGIYrxVKUI2MUZpDmJONwLNAooMsxGuFIUQEZ5oICSU4U1yeX4zCZQe3xfZa+gJtLJjGAi57+SO+ApjrkPINm5Zmm/kMKdeD/FV30sv5b3xbLm9vB/nH8S1enreU6BZxG+Sv38GK3JXm9QdJV3UhHtMuBokwUkD6eeJYkwLuTYjWiXX6oBwgn2iRqUx1LtB9IpDL1KRc60Mqpuuadp38rjWokuApWWyQvtc1/iOD3IvWh5e79D12aKu1nVApcZNQOaMU168nHWeucqe/ngbOXO29M4vE/NlsleBo8woXzGQ7kVZOuW0zjS1t8EIdb/DSsDra2WinIfW05Q7vu/JUNSfFyZJoc2Kt9mU08e7MAjPYlkrb2cvCRmG9rcdcwtod1yIDKdrh/mQoj2/Wj/XBjnY+Gqu/s4fVIgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMw/GI0urJ9TQa0AAAAASUVORK5CYII="
          style={{ width: '175px', height: '175px' }}
          alt="logo"
        />
      </Logo>
      <ButtonContainer>
        <KakaoButton />
        <NaverButton />
      </ButtonContainer>
    </Layout>
  );
};

const Logo = styled.div`
  text-align: center;
  margin-top: 228px;
  img {
    width: 175px;
    height: 175px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export default Login;
