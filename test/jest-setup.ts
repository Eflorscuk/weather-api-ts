import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
    const server = new SetupServer();
    server.init();
    //@ts-ignore
    global.testRequest = supertest(server.getApp());
});
