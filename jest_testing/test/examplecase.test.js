const {
    getMinLikes,
    getMostPopularBlog,
    getTotalLikes,
} = require ('../examplecase');
const user = {
    username:"user1",
    blogs: [
        {
            title: "Entry1",
            Likes:130,
            content: "Blog 1 content ..."
        },
        {
            title: "Entry2",
            Likes:100,
            content: "Blog 2 content ..."
        }
    ]
}
describe("getTotalLikes test",()=> {
    test("should return the total likes of a user", () => {
        expect(getTotalLikes(user)).toBe(230);
    })
});
describe("getMostPopularBlog test",()=> {
    test("should return the most popular Blog of a user", () => {
        const output = {
            title: "Entry1",
            Likes:130,
            content: "Blog 1 content ..."
        }
        expect(getMostPopularBlog(user)).toEqual(output);
    })
});
describe("getMinLikes test",()=> {
    test("should return the min likes of a user", () => {
        expect(getMinLikes(user)).toBe(100);
    })
});
