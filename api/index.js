const fetch = require('node-fetch');

/** This a AWS Lambda implementation */
exports.handler = async (event) => {
  try {
    const rawResponse = await fetch(
      `https://api.deepl.com/v1/translate?text=${event.body.text}&target_lang=${event.body.target_lang}&source_lang=${event.body.source_lang}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'DeepL-Auth-Key 4d093aaf-627c-7e91-0f2d-3039a75e5947'
        }
      }
    );
    const content = await rawResponse.json();

    const response = {
      statusCode: 200,
      body: JSON.stringify(content)
    };
    return response;
  } catch (e) {
    return {
      statusCode: 404,
      body: e
    };
  }
};
