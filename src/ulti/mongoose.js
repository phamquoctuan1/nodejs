module.exports = { 
    mutipleMongoosetoObject : function(mongooses){
        return mongooses.map(mongooses=> mongooses.toObject());

    },
    mongoosetoObject : function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }

}