const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
});

async function executaPromise () {
    await minhaPromise();
    console.log('Passou 1');
    await minhaPromise();
    console.log('Passou 2');
    await minhaPromise();
    console.log('Passou 3');
    const response = await minhaPromise();

    console.log(response);
}

executaPromise();