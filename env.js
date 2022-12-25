const mode = 'dev';
const dev = 'http://10.0.2.2:8000';
const prod = '';
export const HOST = mode === 'dev' ? dev : prod;