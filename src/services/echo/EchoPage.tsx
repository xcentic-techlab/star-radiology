import ServicesLayout from "../ServicesLayout";
import { echoData } from "./echoData";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function EchoPage() {
  const [backendImages, setBackendImages] = useState({});

  useEffect(() => {
    fetch(`/api/images/services/echocardiogram`)
      .then(res => res.json())
      .then(data => {
        const obj:any = {};
        data.forEach((img:any) => (obj[img.key] = img.url));
        setBackendImages(obj);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Echo Test in Noida | Star Radiology</title>
        <meta name="description" content="Advanced Echocardiogram in Noida for heart evaluation." />
      </Helmet>

      <ServicesLayout {...echoData} backendImages={backendImages} />
    </>
  );
}
