import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Snackbar, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Linkform() {
  // State container
  const [clicked, setClicked] = useState(false);
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const [snackBar, setSnackBar] = useState({
    status: false,
    message: "",
  });

  // to check if the local storage has a previous links on initial rendering .
  useEffect(() => {
    let links = JSON.parse(localStorage.getItem("links"));
    if (links?.length) {
      setLinks(links);
    }

    return () => localStorage.clear();
  }, []);

  // This function to hit an api in order for shortening a link

  const handleShortenLink = () => {
    if (link) {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((res) => {
          console.log("rres", res);
          setLinks([
            ...links,
            { fullLink: link, shortenLink: res?.data?.result?.full_short_link },
          ]);

          // to set the local storage every link that user shorten it , to get it if the user refresh the page and tha state lose it's value
          localStorage.setItem(
            "links",
            JSON.stringify([
              ...links,
              {
                fullLink: link,
                shortenLink: res?.data?.result?.full_short_link,
              },
            ])
          );
          setLink("");
        })
        .catch((e) => {
          setSnackBar({ status: true, message: "Please enter a valid url" });
        });
    } else {
      setClicked(true);
    }
  };

  // This function to copy the text to clipboard

  const handleCopyText = (text, index) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      document.getElementById(`copy-btn${index}`).className += ` copied-btn`;
      document.getElementById(`copy-btn${index}`).innerText = `Copied!`;
      return navigator.clipboard.writeText(text);
    }
    return Promise.reject("The Clipboard API is not available.");
  };

  return (
    <div className="lniks-form-container">
      <div className="form-container">
        <img src="/assets/icons/bg-shorten-desktop.svg" alt="" />
        <div className="field-div">
          <TextField
            error={!link && clicked}
            helperText={!link && clicked ? "Please add a link" : ""}
            className="link-field"
            placeholder="Shorten a link here..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            variant="outlined"
          />
          <Button
            onClick={() => handleShortenLink()}
            className="shorten-btn"
            variant="text"
          >
            Shorten it!
          </Button>
        </div>
      </div>
      {links?.length
        ? links.map((item, index) => {
            return (
              <div className="archived-link">
                <p className="full-link">{item.fullLink}</p>
                <div className="copy-text-div">
                  <p className="shorten-link">{item.shortenLink}</p>
                  <Button
                    onClick={() => handleCopyText(item.shortenLink, index)}
                    className="copy-btn"
                    id={`copy-btn${index}`}
                    variant="text"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            );
          })
        : ""}

      <Snackbar
        open={snackBar.status}
        autoHideDuration={3000}
        message={snackBar.message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setSnackBar({ status: false, message: "" })}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
}
