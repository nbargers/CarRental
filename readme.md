## Car Rental App

## Getting Started

After cloning this repo run the following terminal commands to get the development server up and running locally.

1. npm install
2. npm start

This will run the project locally using expo-cli

## Design

This project was designed around a black and white theme to provide clear focal points for the user. I wanted the user to navigate as little as possilbe to accomplish all of the search and functionality as well. Originally, I designed the filters to utilize picker wheels. However, even with the minimal filters these wheels utilized a large amount of space that would cause the use to have to access at least one more additional pages to complete their search. Therefore, I utilized a modal to encompass all of the filters necessary by encorporating react-native-actions-sheet-picker. 

For state management, I chose to utilize Redux Toolkit. For such a small application, state management systems such as Context API or even minor prop drilling would have sufficed. However, it is much more common to use a more robust state management stytem in larger production code and therefore I used Redux Toolkit to get the value of Redux with minimal setup. 






