import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import {
  MatchSchedule,
  CurrentLineup,
  PlayerCollection,
  MatchResult,
} from "./chidComponent";
import {
  currentLineUp,
  latestResult,
  playerCollection,
} from "../../../dataMockup/listLineUp";
import WelcomeModal from "./lineupModal/WelcomeModal";
import  "./lineupStyle/lineupScreen.scss"

export default function Lineup() {
  const currentPath = useLocation();
  const [isViewResult, setIsViewResult] = useState(false);
  const [isWelcome, setIsWelcome] = useState(false);
  const handleViewResult = () => {
    setIsViewResult(!isViewResult);
  };
  const handleWelcome = () => {
    setIsWelcome(!isWelcome);
  };
  useEffect(() => {
    handleWelcome();
  }, []);
  return (
    <div className="lineup_screen">
      <WelcomeModal isVisible={isWelcome} hideModal={handleWelcome} />
      {isViewResult ? (
        <MatchResult data={latestResult} />
      ) : (
        <MatchSchedule onViewResult={handleViewResult} />
      )}
      <Outlet />
      {currentPath.pathname !== "/cho-tot/lineup/allMatchResult" ? (
        <>
          <CurrentLineup data={currentLineUp} />
          <PlayerCollection data={playerCollection} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
