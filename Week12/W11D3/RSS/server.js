const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const Parser = require("rss-parser");
const parser = new Parser();

parser
  .parseURL("https://thefactfile.org/feed/")
  .then((feed) => {
    console.log(feed.title);

    feed.items.forEach((item) => {
      console.log(item.title + ":" + item.link);
    });
  })
  .catch((error) => {
    console.log("Error fetching RSS feed:", error);
  });

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Home page route
app.get("/", (req, res) => {
  parser
    .parseURL("https://thefactfile.org/feed/")
    .then((feed) => {
      res.render("pages/index", { feed });
    })
    .catch((error) => {
      console.log("Error fetching RSS feed:", error);
      res.sendStatus(500);
    });
});

// Search page route
app.get("/search", (req, res) => {
  res.render("pages/search");
});

// Search by title route
app.post("/search/title", (req, res) => {
  const searchTitle = req.body.title;
  // Perform search logic based on the title

  res.render("pages/search");
});

// Search by category route
app.post("/search/category", (req, res) => {
  const searchCategory = req.body.category;
  // Perform search logic based on the category

  res.render("pages/search");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.set('view engine', 'ejs');
app.set('views', './public/pages');
