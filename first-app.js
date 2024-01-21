const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolve1", "resolve1");
        }, 1500)
    });
    return promise;
};

const fetchData2 = (txt) => {
    const promise = new Promise((resolve, reject) => {
        console.log(txt);
        setTimeout(() => {
            resolve("resolve2");
        }, 1500)
    });
    return promise;
};


setTimeout(async () => {
    // try {
    //     console.log("Timer is Done");
    //     const res1 = await fetchData();
    //     const res2 = await fetchData2(res1)
    //     console.log(`Got the final result: ${res2}`);
    // } catch (error) {
    //     () => {
    //         console.log(error)
    //     }
    // }


    fetchData()
        .then((arr, arr2) => {
            console.log(arr, arr2);
            return fetchData2();
        })
        .then(arr => {
            console.log(arr);
        }).catch((error) => console.log(error))
}, 2000);



console.log("Hello!");
console.log("Hi");