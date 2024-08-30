function getTotalLikes(user){
    const totalLikes = user.blogs.reduce((total,blog)=>{
        return(total += blog.Likes);
    },0);
    return totalLikes;
}
function getMostPopularBlog(user){
    const maxLikes = user.blogs.reduce(
        (max,blog,index)=>{
            if(blog.Likes>max.Likes){
                return{
                    index:index,
                    Likes:blog.Likes,
                };
            } else{
                return max;
            }
        },
        {index: undefined, Likes:0},
    );
    const topBlog = user.blogs[maxLikes.index];
    return topBlog
}
const getMinLikes = (user)=> {
    let minLikes = 0;
    minLikes = 100;
    return minLikes;
};
module.exports = {getMinLikes,getMostPopularBlog,getTotalLikes};