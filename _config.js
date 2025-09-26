var config = {}

// MongoDB Atlas connection strings
config.mongoURI = {
    production: 'mongodb+srv://ceradb:ceradb@jenkins-project.djgfqg1.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Jenkins-Project',
    development: 'mongodb+srv://ceradb:ceradb@jenkins-project.djgfqg1.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Jenkins-Project',
    test: 'mongodb+srv://ceradb:ceradb@jenkins-project.djgfqg1.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Jenkins-Project',
}

module.exports = config;
