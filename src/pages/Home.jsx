import React, { useState } from "react";
import {
  InfoBox,
  InputBox,
  Pagination,
  CommonButton,
  CardBox,
  DoneCard,
} from "../components";
import "../assets/style/style.css";

import { done, group, logo, person } from "../assets/images";

function Home() {
  const [page, setPage] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const handleBtnClick = (isLast) => {
    setPage(page + 1);
  };

  const pageJson = [
    {
      heading: "Welcome! First things first...",
      subHeading: "You can always change them later.",
      input: [{
        label: "Full Name",
        placeholder: "Steve Jobs",
      }, 
      {
        label: "Display Name",
        placeholder: "Steve",
      }],
      button: {
        onclick: handleBtnClick,
      },
    },
    {
      heading: "Let's set up a home for all your work",
      subHeading: "You can always create another workspace later.",
      input:[ {
        label: "Workspace Name",
        placeholder: "Eden",
      },  {
        label: "Workspace URL",
        isOptional: true,
        placeholder: "Example",
        boxInput: "www.eden.com/",
      }],
      button: {
        onclick: handleBtnClick,
      },
    },
    {
      heading: "How are you planning to use Eden?",
      subHeading: "We'll streamline your setup experience accordingly.",
      button: {
        onclick: handleBtnClick,
      },
      card: [
        {
          icon: person,
          heading: "For myself",
          subHeading: "Write better. Think more clearly. Stay organized.",
        },
        {
          icon: group,
          heading: "With my team",
          subHeading: "Wikis, docs, tasks and projects, all in one place.",
        },
      ],
    },
    {
      done: {
        icon: done,
        heading: "Congratulations, Eren!",
        subHeading:
          "You have completed the onboarding, you can start using the Eden!",
      },
      button: {
        title: "Launch Eden",
      },
    },
  ];

  const renderCard = (cards) => {
    return cards.map((item, index) => {
      const isActive = activeCard == index ? "activeCard" : "";
      return (
        <CardBox
        key={index}
          onclick={() => {
            setActiveCard(index);
          }}
          className={isActive}
          {...item}
        />
      );
    });
  };

const renderInputs =(inputs)=>{
  return inputs.map((item,index)=>{
    return (
    <InputBox key={index} {...item}  />)
  })
}

  return (
    <div
      style={{
        maxWidth: "40%",
      }}
    >
      <div className="text-center mb-4">
        <img src={logo} alt="logo" />
      </div>

      <Pagination
        totalPages={pageJson.length}
        activePage={page}
        page={page}
        setPage={setPage}
      />

      <InfoBox
        title={pageJson[page].heading}
        subTitle={pageJson[page].subHeading}
      />

      {pageJson[page].input && renderInputs(pageJson[page].input)}
      {pageJson[page].card && (
        <div className="d-md-flex gap-4">{renderCard(pageJson[page].card)}</div>
      )}
      {pageJson[page].done && <DoneCard {...pageJson[page].done} />}

      <CommonButton
        onclick={pageJson[page].button.onclick}
        title={pageJson[page].button.title || "Create WordSpace"}
      />
    </div>
  );
}

export default Home;
