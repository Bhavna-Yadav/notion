const express = require("express");
const cors = require('cors');
const { Client } = require('@notionhq/client');
const app = express();

const notion = new Client({
    auth: 'secret_t2DN7jgAsSNkD3Vdelh8zOM5FNvuxiCan51mJ5kbGlk',
});

const PORT = process.env.PORT || 3003;

app.use(cors());

app.get("/", (req, res) => {
    res.send("get response")
});

app.get("/page/:id", async (req, res) => {
    const pageId = req.params.id;
    try {
        // const response = await notion.blocks.children.list({ block_id: pageId });
        const response = await notion.pages.retrieve({ page_id:  pageId });
        res.json(response);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get("/api/:id", async (req, res) => {
    const pageId = req.params.id;

    try {
        const response = await notion.blocks.children.list({ block_id: pageId });
        res.json(response);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})