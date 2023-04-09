const USER_GET = `
    query UserGet($id: ID!) {
        user(id: $id) {
            id
        }
    }
`;

const STAFF_GET = `
    query UserGet($id: ID!) {
        user(id: $id) {
            id
        }
    }
`;

export { USER_GET, STAFF_GET };