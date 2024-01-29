export default async function RequestRouter (router) {
    const data = (await fetch(`http://localhost:8080/${router}`)).json()
    return data;
};