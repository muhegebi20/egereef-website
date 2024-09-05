const mongoose = require("mongoose");
const Project = require("../model/project");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Egereef");
  console.log("connected to database...");
}

let urls = [
  "https://unsplash.com/photos/group-of-childrens-sitting-on-ground-uaPaEM7MiQQ",
  "https://unsplash.com/photos/grayscale-photography-of-girls-JXdTGEGoitE",
  "https://unsplash.com/photos/water-droplets-V-afy242gY4",
  "https://unsplash.com/photos/a-person-in-a-tent-putting-something-in-a-persons-hand-ci7u1j40EQs",
  "https://unsplash.com/photos/girls-left-hand-wrap-around-toddler-while-reading-book-during-golden-hour-EMZxDosijJ4",
];

const seedProjects = [
  {
    title: "Qarqaarsa Ummata Harargee",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus amet quas rerum, quisquam esse nesciunt nobis autem iusto, dolor accusamus, vitae excepturi fugiat. Aliquid animi aperiam sequi voluptatibus suscipit",
    image: urls[Math.floor(Math.random() * 5)],
  },
  {
    title: "Qarqaarsa Ummata Wolloo",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus amet quas rerum, quisquam esse nesciunt nobis autem iusto, dolor accusamus, vitae excepturi fugiat. Aliquid animi aperiam sequi voluptatibus suscipit",
    image: urls[Math.floor(Math.random() * 5)],
  },
  {
    title: "Qarqaarsa Ummata Baalee",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus amet quas rerum, quisquam esse nesciunt nobis autem iusto, dolor accusamus, vitae excepturi fugiat. Aliquid animi aperiam sequi voluptatibus suscipit",
    image: urls[Math.floor(Math.random() * 5)],
  },
  {
    title: "Qarqaarsa Ummata Booranaa",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus amet quas rerum, quisquam esse nesciunt nobis autem iusto, dolor accusamus, vitae excepturi fugiat. Aliquid animi aperiam sequi voluptatibus suscipit",
    image: urls[Math.floor(Math.random() * 5)],
  },
];

const seedDB = async () => {
  for (let i = 0; i < seedProjects.length; i++) {
    let newProject = new Project({
      title: seedProjects[i].title,
      body: seedProjects[i].body,
      image: seedProjects[i].image,
    });
    await newProject.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
