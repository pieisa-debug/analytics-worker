const { parse } = require('url');
const { createHash } = require('crypto');
const { promisify } = require('util');

const asyncParse = promisify(parse);

function parseUrl(url) {
  const parsedUrl = asyncParse(url);
  return {
    protocol: parsedUrl.protocol.replace(':', ''),
    hostname: parsedUrl.hostname,
    pathname: parsedUrl.pathname,
  };
}

function hashString(str) {
  const hash = createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
}

function generateCookieId(cookie) {
  const cookieString = `${cookie.name}=${cookie.value}`;
  return hashString(cookieString);
}

module.exports = {
  parseUrl,
  hashString,
  generateCookieId,
};