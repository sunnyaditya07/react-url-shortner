import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

function LinkResult({ inputValue, setInputValue }) {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (inputValue.length) {
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${inputValue}`
          );
          const data = await res.json();

          const shortLink = data.result.short_link;
          setShortenLink(shortLink);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    } else {
      return;
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [copied]);

  if (isLoading) {
    return <p className="noDate">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Please Enter Valid URL</p>;
  }

  return (
    <>
      {shortenLink && (
        <>
          <div className="result">
            <p>{shortenLink}</p>
            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
              <button className={copied ? "copied" : ""}>
                Copy to clipboard
              </button>
            </CopyToClipboard>
          </div>
        </>
      )}
    </>
  );
}

export default LinkResult;
