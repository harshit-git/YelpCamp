var mongoose = require('mongoose');
var Campground =require('./models/campground');
var Comment = require('./models/comment');

data = [
    {
        name: "Love nest",
        image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fd27k8xmh3cuzik.cloudfront.net%2Fwp-content%2Fuploads%2F2016%2F08%2FDie-Rakotzbr%25C3%25BCck-or-Devil%25E2%2580%2599s-Bridge.jpg&f=1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Laoreet id donec ultrices tincidunt arcu. Non odio euismod lacinia at. Quam id leo in vitae turpis massa. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Adipiscing enim eu turpis egestas. Lacus sed viverra tellus in hac habitasse. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Et netus et malesuada fames ac turpis egestas. Egestas maecenas pharetra convallis posuere morbi leo. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Quis imperdiet massa tincidunt nunc pulvinar sapien et"
    },
    {
        name: "Mountain Whites",
        image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-VYzS3ISIqa8%2FUG8lP1ajvCI%2FAAAAAAAAH2Q%2FMxeZ8FtLYMg%2Fs1600%2FBaltoro%2BGlacier%2BPakistan%2B002.jpg&f=1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Laoreet id donec ultrices tincidunt arcu. Non odio euismod lacinia at. Quam id leo in vitae turpis massa. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Adipiscing enim eu turpis egestas. Lacus sed viverra tellus in hac habitasse. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Et netus et malesuada fames ac turpis egestas. Egestas maecenas pharetra convallis posuere morbi leo. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Quis imperdiet massa tincidunt nunc pulvinar sapien et."
    },
    {
        name: "Exquisite Dreams",
        image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcoolstays.imgix.net%2F40572.jpg%3F%26w%3D1200%26h%3D800%26fit%3Dcrop%26crop%3Dfocalpoint&f=1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Laoreet id donec ultrices tincidunt arcu. Non odio euismod lacinia at. Quam id leo in vitae turpis massa. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Adipiscing enim eu turpis egestas. Lacus sed viverra tellus in hac habitasse. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Et netus et malesuada fames ac turpis egestas. Egestas maecenas pharetra convallis posuere morbi leo. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Quis imperdiet massa tincidunt nunc pulvinar sapien et."
    }
];

// function seedDB(){
//     Campground.deleteMany({}, function(err){
//         if(err){
//             console.log(err)
//         }
//         else {
//             console.log('removed campgrounds')
//         }
//         data.forEach(function(seed) {
//             Campground.create(seed, function(err, campground){
//                 if(err){
//                     console.log(err)
//                 }
//                 else {
//                     console.log("Added a campground");
//                     //create a comment
//                     Comment.create(
//                         {
//                             text: "Awesome place, but I wish there was internet",
//                             author: 'Homer'
//                         }, function(err, comment){
//                             if(err){
//                                 console.log(err)
//                             }
//                             else {
//                                 campground.comments.push(comment);
//                                 campground.save();
//                                 console.log('Created new comment')
//                             }
//                         }
//                     )
//                 }
//             })
//         });
//     });
// };

//module.exports = seedDB;