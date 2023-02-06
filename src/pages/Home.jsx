import React, { useState } from "react";
import styled from "styled-components";
import ImageOne from "../assets/Icons.svg";
import ImageSecond from "../assets/Icons1.svg";
import ImageThree from "../assets/Icons2.svg";
import four from "../assets/Icons3.svg";
const Home = () => {
  const arr = [
    {
      icon: ImageOne,
      name: "Type company name here",
      id: 1,
    },
    {
      icon: ImageSecond,
      name: "Upload brief",
      id: 2,
    },
    {
      icon: four,
      name: "Write your name",
      id: 3,
    },
    {
      icon: ImageThree,
      name: "Your phone number",
      id: 4,
    },
  ];

  return (
    <Wrapper>
      <div className="container">
        <div className="text">
          Вы можете связаться с нами в любое время через
        </div>
        <div className="inputs">
          {arr.map((item) => (
            <div key={item.id}>
              <span className="icon">
                <img src={item.icon} alt={item.icon} />
              </span>
              <button>{item.name}</button>
            </div>
          ))}
          <button className="btn">Send your info now</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 99.2%;
  min-height: 88.2vh;
  max-height: auto;
  background: #faf9fb;
  padding-top: 100px;
  margin-top: 4px;

  .container {
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    gap: 24px;
    .text {
      min-width: auto;
      max-width: 843px;
      height: 124px;
      border-radius: nullpx;
      font-family: "Outfit";
      font-style: normal;
      font-weight: 400;
      font-size: 46px;
      line-height: 62px;
      color: #000000;
    }
    .inputs {
      min-width: auto;
      max-width: 1000px;
      max-height: auto;
      min-height: 260px;
      background: #f3f2f4;
      border-radius: 18px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      padding: 30px 30px 0;
      gap: 20px;

      div:nth-child(1) {
        width: 70%;
        height: 50px;
        font-family: "Outfit";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        display: flex;
        position: relative;
        button {
          cursor: pointer;
          width: 100%;
          height: 100%;
          border-radius: 100px;
          border: none;
          text-align: left;
          padding-left: 70px;
          font-family: "Outfit";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 30px;
          color: #fdfdfd;
          background: #a044fa;
        }
        .icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 12px;
          background: rgba(255, 255, 255, 0.1);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          text-align: center;
          padding: 6px;
          img {
            width: 100%;
          }
        }
      }
      div:nth-child(2) {
        width: 27%;
        height: 50px;
        border-radius: 100px;
        position: relative;
        button {
          width: 100%;
          height: 100%;
          border-radius: 100px;
          border: none;
          text-align: left;
          padding-left: 60px;
          border: 1px dashed #000000;
          opacity: 0.3;
          cursor: pointer;
          &:focus {
            border-color: #a044fa;
            opacity: 1;
          }
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          background: rgba(18, 18, 18, 0.1);
          border-radius: 50%;
          padding: 6px;
          width: 24px;
          height: 24px;
          img {
            width: 100%;
          }
        }
      }
      div:nth-child(3) {
        width: 48.5%;
        height: 50px;
        border-radius: 100px;
        position: relative;
        button {
          cursor: pointer;
          width: 100%;
          height: 100%;
          border-radius: 100px;
          border: none;
          text-align: left;
          padding-left: 60px;
          width: 100%;
          height: 100%;
          border-radius: 100px;
          border: none;
          text-align: left;
          padding-left: 60px;
          border: 1px dashed #000000;
          opacity: 0.3;
          &:focus {
            border-color: #a044fa;
            opacity: 1;
          }
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          background: rgba(18, 18, 18, 0.1);
          border-radius: 50%;
          padding: 6px;
          width: 24px;
          height: 24px;
          img {
            width: 100%;
          }
        }
      }
      div:nth-child(4) {
        width: 48.5%;
        height: 50px;
        border-radius: 100px;
        position: relative;
        button {
          cursor: pointer;
          width: 100%;
          height: 100%;
          border-radius: 100px;
          border: none;
          text-align: left;
          padding-left: 60px;
          border: 1px dashed #000000;
          opacity: 0.3;
          &:focus {
            border-color: #a044fa;
            opacity: 1;
          }
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          background: rgba(18, 18, 18, 0.1);
          border-radius: 50%;
          padding: 6px;
          width: 24px;
          height: 24px;
          img {
            width: 100%;
          }
        }
      }
    }
    .btn {
      margin: 0 auto;
      height: 50px;
      min-width: 50%;
      border-radius: 100px;
      font-family: "Outfit";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      background: #121212;
      color: #ffffff;
      cursor: pointer;

      border: none;
    }
  }
`;
