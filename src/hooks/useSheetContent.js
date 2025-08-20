import { useEffect, useState } from "react";
import Papa from "papaparse";

const useSheetContent = () => {
  const [content, setContent] = useState({});
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRY8Wztm4Mv5jHAFyGtL3C2wzb45WYE39gTa-vqmp5YIK6FpLne9davPsV7t5xNt4lOQS3OZKsvbQeE/pub?output=csv";

  useEffect(() => {
    fetch(csvUrl)
      .then(res => res.text())
      .then(text => {
        const parsed = Papa.parse(text, { header: true });
        const output = {};
        parsed.data.forEach(({ key, value }) => {
          if (key) output[key.trim()] = value?.trim();
        });
        setContent(output);
      });
  }, [csvUrl]);

  return content;
};

export default useSheetContent;
