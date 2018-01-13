const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/musictoyourears",
  {
    useMongoClient: true
  }
);

const postSeed = [
	{
		title: "Free Guitar Classes in Gilbert",
		body: "Hey guys, I will be meeting students in Downtown Gilbert to practice next week.",
		author: "Carlos Santana",
		imgUrl: "https://i.pinimg.com/736x/2c/b8/77/2cb877ccb7e837a5f09417eb040e80f8--gilbert-osullivan-beautiful-men.jpg",
		date: new Date(Date.now())
	},
	{
		title: "Phoenix Indie Music Meetup",
		body: "The purpose of this group is to bring together fans of indie music so that we can discover new tunes, watch bands, and meet other like-minded folk.",
		author: "Joe R.",
		imgUrl: "http://www.omarimc.com/wp-content/uploads/2016/11/Promoting_Indie_Music_Logo-1-1024x904.png",
		date: new Date(Date.now())

	},
	{
		title: "Taylor Swift Coming to Town",
		body: "The singer-songwriter announced the initial dates for her 2018 Reputation tour, which will kick off on Tuesday, May 8, at the University of Phoenix Stadium in Glendale.",
		author: "Taylor Swift's Manager",
		imgUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taylor_Swift%27s_Reputation_Stadium_tour.png",
		date: new Date(Date.now())
	}
];


const instructorPostSeed = [
	{
		title: "teacher test",
		body: "this would be a post an instructor would put in the site",
		author: "teacher 1",
		url: "",
		date: new Date(Date.now())

	},
	{
		title: "Teacher test2",
		body: "this would be another instructor's post",
		author: "teacher 2",
		url: "",
		date: new Date(Date.now())
	}
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
 db.Instructor
 	.remove({})
 	.then(() => db.Instructor.collection.insertMany(instructorPostSeed))
 	.then(data => {
 		console.log(data.insertedIds.length + " records inserted");
 		process.exit(0);
 	})
 	.catch(err => {
 		console.error(err);
 		process.exit(1);
 	});