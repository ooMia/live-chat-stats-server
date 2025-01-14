/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./cats/dto/create-cat.dto"), { "CreateCatDto": { name: { required: true, type: () => String }, age: { required: true, type: () => Number }, breed: { required: true, type: () => String } } }], [import("./cats/dto/update-cat.dto"), { "UpdateCatDto": {} }], [import("./cats/entities/cat.entity"), { "Cat": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./cats/cats.controller"), { "CatsController": { "create": {}, "redirect": {}, "externalFetch": { type: Object }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }]] } };
};