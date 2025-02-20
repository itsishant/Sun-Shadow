const zod = require("zod");

const create = zod.object({
    username: zod.string(),
    password: zod.string().min(4)
});

module.exports = {
    create
};
