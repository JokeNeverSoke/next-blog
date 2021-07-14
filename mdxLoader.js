const replaceAll = require("string.prototype.replaceall");

module.exports = function (content, map, meta) {
  return (
    // "import Image from 'next/image';\n" +
    replaceAll(
      content,
      /\!\[(.*)\]\((.+)\)/g,
      `<NextImage alt="$1" src={require('$2').default} />`
    )
  );
};
