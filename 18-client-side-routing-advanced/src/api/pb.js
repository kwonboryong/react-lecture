import PocketBase from 'pocketbase';

const PB_API_URL = 'http://127.0.0.1:8090';

const pb = new PocketBase(PB_API_URL);

pb.autoCancellation = true;

export default pb;
