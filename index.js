const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const methodOverride = require("method-override");
const PORT = 3000;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // Allows for PUT and DELETE requests
app.use(express.static("public")); // Serve static files
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/articles");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Items", articleSchema);

// ✅ READ - Display all articles

app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.render("index", { articles });
  } catch (err) {
    console.error(err);
    res.send("Error fetching articles");
  }
});

// ✅ CREATE - Add a new article

app.get("/articles/new", (req, res) => {
  res.render("new");
});

// POST request to /new to create a new article

app.post("/articles", async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = new Article({ title, content });
    await article.save();
    res.redirect("/articles");
  } catch (error) {
    console.error(error);
    res.send("Error saving article");
  }
});

// ✅ UPDATE - Edit an existing article

app.get("/articles/:id/edit", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.render("edit", { article });
  } catch (error) {
    console.error(error);
    res.send("Error fetching article");
  }
});

app.put("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect("/articles");
  } catch (error) {
    console.error(error);
    res.send("Error updating article");
  }
});

// ✅ DELETE - Remove an article

app.delete("/articles/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect("/articles");
  } catch (error) {
    console.error(error);
    res.send("Error deleting article");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
