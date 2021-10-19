const EXPRESS_API_URL = process.env.EXPRESS_API_URL || 'http://localhost:5001';
const EXPRESS_API_SUBPATH = process.env.EXPRESS_API_SUBPATH || 'glc-fbase/us-central1';
const EXPRESS_API_DEFAULTEXPRESS = process.env.EXPRESS_API_DEFAULTEXPRESS || 'glc-fbase/us-central1/expressAPI';
const EXPRESS_API_HELLOWORLD = process.env.EXPRESS_HELLOWORLD || 'glc-fbase/us-central1/expressAPI/api/hello-world';

export { EXPRESS_API_URL, EXPRESS_API_SUBPATH, EXPRESS_API_HELLOWORLD };
