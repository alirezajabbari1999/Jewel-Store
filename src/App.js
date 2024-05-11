import React from 'react'
import './App.css';
import './components/MediaQuery/MediaQuery.css'
import { useRoutes } from "react-router-dom";
import routes from "./route";

export default function App() {

  let router = useRoutes(routes)

  return (
    <div>
      {router}
    </div>
  )
}

