import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import AxiosService from "../components/AxiosService";
import Header from "../components/Header";
import "./Home.css";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  return (
    <div className="all">
      <IonPage>
        <IonContent >
          <Header></Header>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Home;
