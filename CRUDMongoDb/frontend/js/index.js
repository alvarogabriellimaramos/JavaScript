import RequestRouter from "./api/api.js";
import CreateElement from "./element/index.js";
import { Post } from "./actions/index.js";
RequestRouter('tasks','GET').then(res => {
    CreateElement(res);
})
.catch(e => console.log(e))
const form = document.querySelector('form');
const input = document.querySelector('input');
const DivMsg = document.querySelector(".msg");
form.addEventListener('submit',async event => {
    event.preventDefault()
    Post(input,DivMsg);
});

