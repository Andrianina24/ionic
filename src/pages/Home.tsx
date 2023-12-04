import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import AxiosService from "../components/AxiosService";
import Header from "../components/Header";
import Table from "../components/Table";
// import "./Home.css";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  return (
    <div className="all">
      <IonPage>
        <IonContent fullscreen>
          <Header></Header>
          {/* <Table meth="general"></Table> */}
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Home;
