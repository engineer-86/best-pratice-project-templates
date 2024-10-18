import * as dotenv from 'dotenv';

dotenv.config();

export function getEnvVariable(name: string): string {
    const value = process.env[name];
    if (!value) {
        console.log(`Environment variable ${name} is not set.`);
        process.exit(1);
    }
    return value;
}

export const expressPort: string = getEnvVariable('PORT');
export const connectionString: string = getEnvVariable('DB_CONN_STRING');
export const questCollection: string = getEnvVariable('QUEST_COLLECTION');
export const userCollection: string = getEnvVariable('USER_COLLECTION');
export const dataBaseName: string = getEnvVariable('DB_NAME');

export function checkEnviromentVariables(): void {
    console.log('Environment variables:');
    console.log(`- PORT: ${expressPort}`);
    console.log(`- DB_CONN_STRING: ${connectionString}`);
    console.log(`- QUEST_COLLECTION: ${questCollection}`);
    console.log(`- USER_COLLECTION: ${userCollection}`);
    console.log(`- DB_NAME: ${dataBaseName}`);
}
