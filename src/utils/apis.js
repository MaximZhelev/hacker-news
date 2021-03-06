import axios from "axios";
import { BASE_API_URL } from "./constants";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    throw new Error("Error while loading data. Try again later.");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 25).map(getStory));
    return stories; 
  } catch (error) {
      throw new Error("Error while loading data. Try again later.")
  }
};



