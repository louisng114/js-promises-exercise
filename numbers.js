/*******************************************************************************
Make a request to the Numbers API (http://numbersapi.com/) to get a fact about
your favorite number. (Make sure you get back JSON by including the json query
key, specific to this API. Details.
*******************************************************************************/

axios
    .get("http://numbersapi.com/144?json")
    .then(res => console.log(res.data.text))
    .catch(err => {console.log(err)})

/*******************************************************************************
Figure out how to get data on multiple numbers in a single request. Make that
request and when you get the data back, put all of the number facts on the page.
*******************************************************************************/

axios
    .get("http://numbersapi.com/11..14?json")
    .then(res => {console.log(res.data[11]);
                console.log(res.data[12]);
                console.log(res.data[13]);
                console.log(res.data[14]);})
    .catch(err => {console.log(err)})

/*******************************************************************************
Use the API to get 4 facts on your favorite number. Once you have them all,
put them on the page. It’s okay if some of the facts are repeats.
*******************************************************************************/
axios
    .get("http://numbersapi.com/114?json")
    .then(res => console.log(res.data.text))
    .catch(err => {console.log(err)})

    axios
    .get("http://numbersapi.com/114/math?json")
    .then(res => console.log(res.data.text))
    .catch(err => {console.log(err)})
