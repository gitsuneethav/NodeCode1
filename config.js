var config = {}

config.host = process.env.HOST || "https://svdocumentdb.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "/mPfCps457B231KLKsEJara1KRc9jiQHsdLD0BU2mD2mmp5iIAjSg9UZgrmmVAjCX17ozHFngDJH7yy+qf8kPg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;

