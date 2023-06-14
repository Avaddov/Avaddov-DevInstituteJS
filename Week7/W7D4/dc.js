// Define the Video class
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    // Define the watch() method
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // Instantiate a new Video instance and call the watch() method
  const video1 = new Video("Funny Cats Compilation", "John", 300);
  video1.watch();
  
  // Instantiate a second Video instance with different values
  const video2 = new Video("Gymnastics Highlights", "Mary", 240);
  video2.watch();
  
  // Bonus: Use an array to store data for five Video instances
  const videosData = [
    {
      title: "Funny Cats Compilation",
      uploader: "John",
      time: 300,
    },
    {
      title: "Gymnastics Highlights",
      uploader: "Mary",
      time: 240,
    },
    {
      title: "Cooking Tutorial",
      uploader: "Alex",
      time: 600,
    },
    {
      title: "Travel Vlog",
      uploader: "Sarah",
      time: 480,
    },
    {
      title: "Product Review",
      uploader: "Tom",
      time: 180,
    },
  ];
  
  // Loop through the array to instantiate Video instances
  const videos = [];
  for (const videoData of videosData) {
    // Use the spread operator to pass the object properties as arguments to the Video constructor
    const video = new Video(...Object.values(videoData));
    videos.push(video);
  }
  
  // Call the watch() method on each Video instance
  for (const video of videos) {
    video.watch();
  }
  