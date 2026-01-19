import ServicesLayout from "../ServicesLayout";
import { pathologyData } from "./pathologyData";
import { useEffect, useState } from "react";  

const PathologyPage = () => {
    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch("http://localhost:5000/api/images/services/pathology")
      .then(res => res.json())
      .then(data => {
        const obj = {};
        data.forEach(img => {
          obj[img.key] = img.url;
        });
        setBackendImages(obj);
      });
  }, []);
  
  

  return <ServicesLayout {...pathologyData} backendImages={backendImages}/>;
};

export default PathologyPage;
