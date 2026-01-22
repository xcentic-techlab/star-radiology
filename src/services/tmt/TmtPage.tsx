import ServicesLayout from "../ServicesLayout";
import { tmtData } from "./tmtData";
import { useEffect, useState } from "react";

export default function TmtPage() {
  const [backendImages, setBackendImages] = useState({});

  useEffect(() => {
    fetch(`/api/images/services/tmt`)
      .then(res => res.json())
      .then(data => {
        const obj:any = {};
        data.forEach((img:any) => (obj[img.key] = img.url));
        setBackendImages(obj);
      });
  }, []);

  return <ServicesLayout {...tmtData} backendImages={backendImages} />;
}
