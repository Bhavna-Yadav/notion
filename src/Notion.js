import { Client } from '@notionhq/client';

const client = new Client({ auth: "secret_t2DN7jgAsSNkD3Vdelh8zOM5FNvuxiCan51mJ5kbGlk" });

export default client;


// {
//     "object": "page",
//     "id": "1386e4c7-a7a9-4edb-bc5f-6a141be6f68b",
//     "created_time": "2023-12-08T07:07:00.000Z",
//     "last_edited_time": "2023-12-19T12:05:00.000Z",
//     "created_by": {
//         "object": "user",
//         "id": "2b9b1766-bfc5-4c63-994a-4be730f7787a"
//     },
//     "last_edited_by": {
//         "object": "user",
//         "id": "2b9b1766-bfc5-4c63-994a-4be730f7787a"
//     },
//     "cover": {
//         "type": "external",
//         "external": {
//             "url": "data:image/jpeg;base64,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"
//         }
//     },
//     "icon": {
//         "type": "emoji",
//         "emoji": "🎓"
//     },
//     "parent": {
//         "type": "workspace",
//         "workspace": true
//     },
//     "archived": false,
//     "properties": {
//         "title": {
//             "id": "title",
//             "type": "title",
//             "title": [
//                 {
//                     "type": "text",
//                     "text": {
//                         "content": "College Masters",
//                         "link": null
//                     },
//                     "annotations": {
//                         "bold": false,
//                         "italic": false,
//                         "strikethrough": false,
//                         "underline": false,
//                         "code": false,
//                         "color": "default"
//                     },
//                     "plain_text": "College Masters",
//                     "href": null
//                 }
//             ]
//         }
//     },
//     "url": "https://www.notion.so/College-Masters-1386e4c7a7a94edbbc5f6a141be6f68b",
//     "public_url": "https://sprinkle-platinum-daf.notion.site/College-Masters-1386e4c7a7a94edbbc5f6a141be6f68b",
//     "request_id": "b4b89f43-e3fe-4e85-b6ed-6bb8a384897a"
// }