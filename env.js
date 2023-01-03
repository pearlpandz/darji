const mode = 'prod';
const dev = 'http://10.0.2.2:8000';
const prod = 'http://3.16.21.102';
export const HOST = mode === 'dev' ? dev : prod;