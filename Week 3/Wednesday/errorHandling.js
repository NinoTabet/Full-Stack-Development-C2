function main(){
    try {
        // attempts to perform all code inside of here
        let i = 10/0;

        console.log(i)
    } catch (error) {
        console.error(error.message);
    }finally{
        console.log('code completed. please check the console.');
    }
}

main();