const { exec } = require('child_process');

export const addBalanceViaDocker = (email: string, amount: string) => {
    return new Promise((resolve, reject) => {
        exec(`docker exec <container_id> npm run add-balance ${email} ${amount}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error running Docker command: ${error.message}`);
                return reject(error);
            }
            console.log(`Command output: ${stdout}`);
            resolve(stdout);
        });
    });
};
