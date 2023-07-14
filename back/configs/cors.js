const WHITELIST = ["localhost", "deploy-example-tan.vercel.app"];

const options = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const match = WHITELIST.find((domain) => origin.includes(domain));

    match ? callback(null, true) : callback(null, false);
  },
  credentials: true,
};

module.exports = options;
