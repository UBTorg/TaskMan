import mongoose from "mongoose";
const { MONGO_URI } = process.env;

export default function createMongooseConnnection() {
    console.log(MONGO_URI);

    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        autoIndex: false,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });

    const { connection } = mongoose;

    connection.on("error", console.error.bind(console, "connection error:"));
    connection.once("open", () => {
        console.log("database connection established successfully");
    });
}
