const form = document.getElementById("searchform");
const displayArea = document.getElementById("darea");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("submitted");
    displayArea.innerHTML = "";
    const SB = document.getElementById("searchbar");
    const query = SB.value;
    const result = await getShowName(query);
    const Results = result.data;
    const length = Results.length;
    form.elements.query.value = '';

    for (let i = 0; i < length; i++) {
        //let title = document.createElement("p");
        let img = document.createElement("IMG");
        img.className = "img-fluid p-2";
        img.src = Results[i].show.image.medium;
        // title.append(Results[i].show.name);
        //displayArea.append(title);

        displayArea.append(img);
        console.log(Results[i].show.name);
    }
})

const getShowName = async (query) => {
    const config1 = { params: { q: query } };
    const JSONobj = await axios.get("https://api.tvmaze.com/search/shows", config1);
    const config = { params: { q: query } };
    console.log(JSONobj);

    return JSONobj;
}





