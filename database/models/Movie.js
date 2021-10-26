module.exports = (sequelize, DataTypes) => {
    let alias = 'movies'
    let cols = {
        id:{autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER} ,
        title:{type: DataTypes.STRING} ,
        rating:{type: DataTypes.DECIMAL} ,
        awards:{type: DataTypes.INTEGER} ,
        release_date:{type: DataTypes.DATE} ,
        length:{type: DataTypes.INTEGER} ,
        genre_id:{type: DataTypes.INTEGER} 
    }
    let config = {
        tableName: 'movies',
        timestamps: false
    }


const movie = sequelize.define(alias, cols, config);
return movie
};

