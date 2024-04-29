// fetch API
// New and easier way

const getTodos = async () => {
    const res = await fetch("todos/luigi.json");

    if (res.status !== 200) {
        throw new Error("cannot fetch the data");
    }

    const data = await res.json();
    return data;
};

getTodos()
    .then((data) => console.log("resolved: ", data))
    .catch((err) => console.log("Rejected: ", err.message));

// fetch("todos/luigi.json")
//     .then((res) => {
//         console.log("Resolved", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("Rejected", err);
//     });
